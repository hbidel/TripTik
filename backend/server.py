from fastapi import FastAPI, APIRouter, HTTPException, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models

# Restaurant Information Models
class RestaurantHours(BaseModel):
    weekdays: str
    saturday: str
    weekend: str
    closed: str

class RestaurantInfo(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    tagline: str
    location: str
    description: str
    phone: str
    email: str
    address: str
    instagram: str
    hours: RestaurantHours
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Menu Models
class MenuCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    order: int
    active: bool = True

class MenuItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    price: str
    category_id: str
    available: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Wine(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    type: str
    description: str
    price: str
    available: bool = True

# Reservation Models
class ReservationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    date: str
    time: str
    guests: int
    message: str = ""

class Reservation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    date: str
    time: str
    guests: int
    message: str = ""
    status: str = "pending"  # pending, confirmed, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Testimonial Models
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    text: str
    rating: int
    active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Legacy Models (keeping for compatibility)
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Trip'Tik Restaurant API"}

# Restaurant Information Endpoints
@api_router.get("/restaurant/info", response_model=RestaurantInfo)
async def get_restaurant_info():
    """Get restaurant information"""
    restaurant_info = await db.restaurant_info.find_one()
    if not restaurant_info:
        # Return default restaurant info if not found in DB
        default_info = {
            "name": "Trip'Tik",
            "tagline": "Modern Bistro • Traditional Soul",
            "location": "Saint-Pierre, Reunion Island",
            "description": "A modern and welcoming bistro, blending traditional spirit with contemporary touches. Our cozy and intimate interior, with exposed rubble walls and shelves filled with wine bottles, evokes the soul of Parisian bistros while bringing a touch of modernity.",
            "phone": "0262 59 66 94",
            "email": "contact@triptik-reunion.com",
            "address": "7 rue Auguste Babet, 97410 Saint-Pierre, Reunion Island",
            "instagram": "https://www.instagram.com/triptikrestaurant/",
            "hours": {
                "weekdays": "12:00 - 14:30 • 19:00 - 22:30",
                "saturday": "19:00 - 23:00",
                "weekend": "Fermé",
                "closed": "Dimanche et Lundi"
            }
        }
        # Insert default info into database
        default_info_obj = RestaurantInfo(**default_info)
        await db.restaurant_info.insert_one(default_info_obj.dict())
        return default_info_obj
    return RestaurantInfo(**restaurant_info)

# Menu Endpoints
@api_router.get("/menu/categories", response_model=List[MenuCategory])
async def get_menu_categories():
    """Get all menu categories"""
    categories = await db.menu_categories.find({"active": True}).sort("order", 1).to_list(100)
    if not categories:
        # Insert default categories if none exist
        default_categories = [
            {"name": "Entrées", "order": 1, "active": True},
            {"name": "Plats Principaux", "order": 2, "active": True},
            {"name": "Desserts", "order": 3, "active": True},
            {"name": "Menu Enfant", "order": 4, "active": True}
        ]
        category_objects = [MenuCategory(**cat) for cat in default_categories]
        await db.menu_categories.insert_many([cat.dict() for cat in category_objects])
        return category_objects
    return [MenuCategory(**cat) for cat in categories]

@api_router.get("/menu/items/{category_id}", response_model=List[MenuItem])
async def get_menu_items(category_id: str):
    """Get menu items by category"""
    items = await db.menu_items.find({"category_id": category_id, "available": True}).to_list(100)
    return [MenuItem(**item) for item in items]

@api_router.get("/menu/wines", response_model=List[Wine])
async def get_wines():
    """Get wine selection"""
    wines = await db.wines.find({"available": True}).to_list(100)
    if not wines:
        # Insert default wines if none exist
        default_wines = [
            {
                "name": "Château de Bourbon",
                "type": "Rouge",
                "description": "Local red wine from Reunion Island",
                "price": "32,00 €"
            },
            {
                "name": "Sancerre",
                "type": "Blanc", 
                "description": "Crisp Loire Valley white wine",
                "price": "38,00 €"
            },
            {
                "name": "Champagne Brut",
                "type": "Pétillant",
                "description": "House champagne selection", 
                "price": "52,00 €"
            }
        ]
        wine_objects = [Wine(**wine) for wine in default_wines]
        await db.wines.insert_many([wine.dict() for wine in wine_objects])
        return wine_objects
    return [Wine(**wine) for wine in wines]

# Reservation Endpoints
@api_router.post("/reservations", response_model=Reservation)
async def create_reservation(reservation_data: ReservationCreate):
    """Create a new reservation"""
    try:
        reservation = Reservation(**reservation_data.dict())
        result = await db.reservations.insert_one(reservation.dict())
        if result.inserted_id:
            return reservation
        else:
            raise HTTPException(status_code=500, detail="Failed to create reservation")
    except Exception as e:
        logger.error(f"Error creating reservation: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create reservation")

@api_router.get("/reservations", response_model=List[Reservation])
async def get_reservations():
    """Get all reservations (admin endpoint)"""
    reservations = await db.reservations.find().sort("created_at", -1).to_list(1000)
    return [Reservation(**reservation) for reservation in reservations]

@api_router.get("/reservations/{reservation_id}", response_model=Reservation)
async def get_reservation(reservation_id: str):
    """Get a specific reservation"""
    reservation = await db.reservations.find_one({"id": reservation_id})
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found")
    return Reservation(**reservation)

# Testimonials Endpoints
@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    """Get all active testimonials"""
    testimonials = await db.testimonials.find({"active": True}).sort("created_at", -1).to_list(100)
    if not testimonials:
        # Insert default testimonials if none exist
        default_testimonials = [
            {
                "name": "Helene Baron Hoarau",
                "text": "Très bon moment au Trip Tik. Accueil et service très agréable, chaleureux. Cuisine de qualité et si généreuse. Une petite carte mais parfaitement maîtrisée avec des produits frais et simples mais parfaitement exécutés avec du goût. Le café gourmand est excellent avec une pâte artisanale de très bonne qualité.",
                "rating": 5
            },
            {
                "name": "E.M.",
                "text": "Une adresse qu'il ne faut pas manquer ! Un endroit atypique où l'art se mélange avec un petit fond musical appréciable. Côté bar et cuisine, un joli menu dans une carte limitée mais de qualité, une cuisine inventive et savoureuse... À découvrir !",
                "rating": 5
            },
            {
                "name": "Val Val",
                "text": "Une carte qui sait s'adapter à différents goûts gourmets avec des produits frais délicatement cuisinés. J'ai emmené ma maman de 96 ans qui s'est régalée ! Longue vie au Trip'Tik.",
                "rating": 5
            },
            {
                "name": "Thousand Roses",
                "text": "Très bon restaurant, situé en centre ville de St Pierre, dans une ambiance bistrot parisien authentique, et une carte qui change régulièrement. Cuisine inventive et savoureuse, service de qualité qui se traduit en choix vigoureux à la carte.",
                "rating": 5
            }
        ]
        testimonial_objects = [Testimonial(**testimonial) for testimonial in default_testimonials] 
        await db.testimonials.insert_many([testimonial.dict() for testimonial in testimonial_objects])
        return testimonial_objects
    return [Testimonial(**testimonial) for testimonial in testimonials]

# Legacy endpoints (keeping for compatibility)
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
