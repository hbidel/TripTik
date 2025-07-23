"""
Database initialization script for Trip'Tik Restaurant
Populates the database with menu items and categories
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
import uuid
from datetime import datetime

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def init_database():
    """Initialize database with menu items and categories"""
    
    # Connect to MongoDB
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    print("🚀 Initializing Trip'Tik database...")
    
    # Clear existing data
    await db.menu_categories.delete_many({})
    await db.menu_items.delete_many({})
    print("✅ Cleared existing menu data")
    
    # Insert Menu Categories
    categories = [
        {"id": str(uuid.uuid4()), "name": "Entrées", "order": 1, "active": True},
        {"id": str(uuid.uuid4()), "name": "Plats Principaux", "order": 2, "active": True},
        {"id": str(uuid.uuid4()), "name": "Desserts", "order": 3, "active": True},
        {"id": str(uuid.uuid4()), "name": "Menu Enfant", "order": 4, "active": True}
    ]
    
    await db.menu_categories.insert_many(categories)
    print("✅ Inserted menu categories")
    
    # Get category IDs for menu items
    entrees_id = categories[0]["id"]
    mains_id = categories[1]["id"] 
    desserts_id = categories[2]["id"]
    enfant_id = categories[3]["id"]
    
    # Insert Menu Items
    menu_items = [
        # Entrées
        {
            "id": str(uuid.uuid4()),
            "name": "Tataki De Thon",
            "description": "Thon snacké juste saisi, julienne de navet et papaye, mayonnaise au wasabi, gingembre confit et wakamé. Fraîcheur iodée et peps exotique au rendez-vous.",
            "price": "12,00 €",
            "category_id": entrees_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Quiche Lorraine Déstructurée",
            "description": "Pâte brisée croustillante, lard grillé, flan onctueux au syphon et tuile d'emmental. Toute la gourmandise de la Lorraine en version contemporaine.",
            "price": "10,00 €",
            "category_id": entrees_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Patate Douce Façon Gemüse",
            "description": "Patate douce rôtie, feta, courgette snackée, éclats de grenade, menthe parfumée et noisettes torréfiées. Une explosion végétale en bouche.",
            "price": "10,00 €",
            "category_id": entrees_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Poireaux Vinaigrette",
            "description": "Poireaux braisés fondants, œuf poché, espuma aérien, pickles croquants de poireau et gressin maison. Un jeu de textures et de saveurs en toute légèreté.",
            "price": "10,00 €",
            "category_id": entrees_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Z'escargots Du Tampon",
            "description": "Nappés d'une persillade créole relevée à l'ail et aux fines herbes. Une invitation au terroir réunionnais.",
            "price": "x6: 12,00 € / x12: 20,00 €",
            "category_id": entrees_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        
        # Plats Principaux
        {
            "id": str(uuid.uuid4()),
            "name": "Magret De Canard",
            "description": "Magret tendre cuisson basse température, confit d'oignons en sauce meurette, mille-feuille de pommes de terre crousti-fondantes et carottes rôties. Une vraie gourmandise pour les amateurs de finesse.",
            "price": "25,00 €",
            "category_id": mains_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Cordon Bleu",
            "description": "Cordon bleu de veau généreux et fait maison, nappé d'une sauce crème aux champignons, accompagné de spaetzle moelleux et de courgettes grillées. Une assiette réconfortante et pleine de caractère.",
            "price": "24,00 €",
            "category_id": mains_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Pièce Du Boucher",
            "description": "Une viande juteuse cuite à la perfection, sublimée par un beurre maître d'hôtel fondant et des potatoes maisons croustillantes à souhait.",
            "price": "20,00 €",
            "category_id": mains_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Poulpe Grillé",
            "description": "Poulpe tendre saisi au gril, écrasé de pomme de terre à l'olive, chimichurri maison et poivrons confits. Voyage garanti entre terre et mer.",
            "price": "23,00 €",
            "category_id": mains_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Pavé De Daurade",
            "description": "Dorade meunière, peau croustillante et chair délicate, servie avec des légumes glacés et un riz pilaf parfumé. Une assiette marine tout en élégance.",
            "price": "23,00 €",
            "category_id": mains_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Risotto Pesto", 
            "description": "Risotto crémeux au pesto maison, burrata coulante, tomates confites, caviar d'aubergine et amandes effilées. Une balade méditerranéenne végétarienne pleine de soleil.",
            "price": "22,00 €",
            "category_id": mains_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        
        # Desserts
        {
            "id": str(uuid.uuid4()),
            "name": "Ananas Rôti",
            "description": "Ananas rôti au beurre salé, ganache onctueuse au chocolat blanc et brunoise d'ananas frais. Fraîcheur, douceur, et une pointe d'exotisme.",
            "price": "11,00 €",
            "category_id": desserts_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Brownie Chocolat",
            "description": "Brownie fondant, noix de macadamia croquantes, ganache aux chocolats blanc et noir. Pour les amoureux du chocolat.",
            "price": "11,00 €",
            "category_id": desserts_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Crème Brulée Du Moment",
            "description": "L'inspiration sucrée du chef selon la saison…laissez-vous surprendre !",
            "price": "8,00 €",
            "category_id": desserts_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Moelleux Chocolat",
            "description": "Meringue craquante, confiture de patate douce à la vanille, segments d'orange et sorbet de tangor. Un dessert aérien, fruité et étonnant.",
            "price": "11,00 €",
            "category_id": desserts_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Café Ou Thé Gourmand",
            "description": "Un assortiment de mini douceurs maison pour finir en beauté sans devoir choisir.",
            "price": "10,00 €",
            "category_id": desserts_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Dégustation De Fromage",
            "description": "Sélection de fromages du moment x3, (±100g)",
            "price": "12,00 €",
            "category_id": desserts_id,
            "available": True,
            "created_at": datetime.utcnow()
        },
        
        # Menu Enfant
        {
            "id": str(uuid.uuid4()),
            "name": "Menu Enfant",
            "description": "Demi portion de la Pièce Du Boucher OU du Poisson Du Jour + Garniture au choix + Sirop + Boule de glace ou migniardises",
            "price": "14,00 €",
            "category_id": enfant_id,
            "available": True,
            "created_at": datetime.utcnow()
        }
    ]
    
    await db.menu_items.insert_many(menu_items)
    print("✅ Inserted menu items")
    
    # Close connection
    client.close()
    print("🎉 Database initialization completed!")
    print(f"📊 Inserted {len(categories)} categories and {len(menu_items)} menu items")

if __name__ == "__main__":
    asyncio.run(init_database())