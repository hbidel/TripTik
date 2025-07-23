# Trip'Tik Restaurant - API Contracts & Backend Integration

## Overview
This document outlines the API contracts, data models, and integration points between the Trip'Tik frontend and backend systems.

## Current Mock Data to Replace

### 1. Restaurant Information (mock.js)
**Current Mock Data:**
- Restaurant details (name, location, hours, contact)
- Navigation items
- Features description

**Backend Implementation:**
- Store restaurant info in MongoDB `restaurant_info` collection
- API endpoint: `GET /api/restaurant/info`

### 2. Menu System (mock.js)
**Current Mock Data:**
- Menu categories (Entrées, Plats Principaux, Desserts, Menu Enfant)
- Individual menu items with descriptions and prices
- Wine selection

**Backend Implementation:**
- MongoDB `menu_categories` and `menu_items` collections
- API endpoints:
  - `GET /api/menu/categories` - Get all menu categories
  - `GET /api/menu/items/:categoryId` - Get items by category
  - `GET /api/menu/wines` - Get wine selection

### 3. Reservations System (mock.js)
**Current Mock Data:**
- Form submission with local storage/alert
- No persistence

**Backend Implementation:**
- MongoDB `reservations` collection
- API endpoints:
  - `POST /api/reservations` - Create new reservation
  - `GET /api/reservations` - Get all reservations (admin)
  - `GET /api/reservations/:id` - Get specific reservation
  - `PUT /api/reservations/:id` - Update reservation status

### 4. Testimonials (mock.js)
**Current Mock Data:**
- Static Google reviews

**Backend Implementation:**
- MongoDB `testimonials` collection
- API endpoint: `GET /api/testimonials`

## API Endpoints Specification

### Restaurant Information
```
GET /api/restaurant/info
Response: {
  name: string,
  tagline: string,
  location: string,
  description: string,
  phone: string,
  email: string,
  address: string,
  instagram: string,
  hours: {
    weekdays: string,
    saturday: string,
    weekend: string,
    closed: string
  }
}
```

### Menu System
```
GET /api/menu/categories
Response: [{
  id: string,
  name: string,
  order: number
}]

GET /api/menu/items/:categoryId
Response: [{
  id: string,
  name: string,
  description: string,
  price: string,
  categoryId: string,
  available: boolean
}]

GET /api/menu/wines
Response: [{
  id: string,
  name: string,
  type: string,
  description: string,
  price: string
}]
```

### Reservations
```
POST /api/reservations
Request: {
  name: string,
  email: string,
  phone: string,
  date: string,
  time: string,
  guests: number,
  message: string
}
Response: {
  id: string,
  status: 'pending' | 'confirmed' | 'cancelled',
  createdAt: datetime,
  ...requestData
}

GET /api/reservations
Response: [{
  id: string,
  name: string,
  email: string,
  phone: string,
  date: string,
  time: string,
  guests: number,
  message: string,
  status: string,
  createdAt: datetime
}]
```

### Testimonials
```
GET /api/testimonials
Response: [{
  id: string,
  name: string,
  text: string,
  rating: number,
  createdAt: datetime
}]
```

## Database Models

### Restaurant Info Model
```python
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
    hours: dict
    updated_at: datetime = Field(default_factory=datetime.utcnow)
```

### Menu Category Model
```python
class MenuCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    order: int
    active: bool = True
```

### Menu Item Model
```python
class MenuItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    price: str
    category_id: str
    available: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

### Reservation Model
```python
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
```

### Testimonial Model
```python
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    text: str
    rating: int
    active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

## Frontend Integration Points

### 1. Restaurant Information
**File:** `src/components/Hero.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`
**Current:** Uses `mockData.restaurant`
**Change:** Replace with API call to `/api/restaurant/info`

### 2. Menu System
**File:** `src/components/Menu.jsx`
**Current:** Uses `mockData.menuCategories` and `mockData.wines`
**Change:** Replace with API calls to `/api/menu/categories` and `/api/menu/items/:categoryId`

### 3. Reservations
**File:** `src/components/Contact.jsx`
**Current:** `handleReservation` function shows alert
**Change:** POST to `/api/reservations` with proper response handling

### 4. Testimonials
**File:** `src/components/About.jsx`
**Current:** Uses `mockData.testimonials`
**Change:** Replace with API call to `/api/testimonials`

## Implementation Priority

1. **Phase 1:** Reservation system (highest business value)
2. **Phase 2:** Menu management (dynamic content)
3. **Phase 3:** Restaurant info management
4. **Phase 4:** Testimonials management

## Error Handling Strategy

- Graceful fallbacks to mock data if API unavailable
- User-friendly error messages for form submissions
- Loading states for all API calls
- Retry mechanisms for failed requests

## Security Considerations

- Input validation on all endpoints
- Email validation for reservations
- Rate limiting on reservation endpoint
- CORS configuration for frontend domain
- Basic sanitization of user inputs

## Future Enhancements

- Admin panel for restaurant management
- Email notifications for reservations
- SMS confirmations
- Table availability checking
- Waitlist management
- Menu item images
- Customer loyalty program integration