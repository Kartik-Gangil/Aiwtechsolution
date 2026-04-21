# AiWtechsolution - Business Listings Platform

A modern web application for managing and discovering local business listings built with Next.js, Prisma, and MongoDB.

## Features

- 🏢 **Business Listings** - Browse all registered businesses with detailed information
- 🔍 **Search & Filter** - Search by name or category
- 📊 **Admin Dashboard** - Manage all business listings
- ➕ **Add Listings** - Create new business entries with images
- ✏️ **Edit Listings** - Update existing business information
- 🗑️ **Delete Listings** - Remove businesses from the platform
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🖼️ **Image Support** - Upload logos and cover images (base64 encoded)

## Business Fields

Each business listing includes:
- Business Name
- Category
- Address
- Phone Number
- Website (optional)
- Description
- Operating Hours/Timing
- Logo Image
- Cover Images (multiple)

## Tech Stack

- **Frontend**: Next.js 16.2.4, React 19.2.4, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **ORM**: Prisma
- **Runtime**: Node.js

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   cd my-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Replace the MongoDB connection string with your actual database URL
   ```bash
   cp .env.example .env.local
   ```

4. **Configure MongoDB Connection String**
   Edit `.env.local`:
   ```
   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/aiwtechsolution"
   ```

5. **Initialize Prisma**
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Landing Page: http://localhost:3000
   - Business Listings: http://localhost:3000/listings
   - Admin Dashboard: http://localhost:3000/admin
   - Add Business: http://localhost:3000/admin/add

## Project Structure

```
app/
├── page.tsx                    # Landing page
├── layout.tsx                  # Root layout with metadata
├── globals.css                 # Global styles
├── listings/
│   └── page.tsx               # Business listings page
├── admin/
│   ├── page.tsx               # Admin dashboard
│   ├── add/
│   │   └── page.tsx           # Add business form
│   └── edit/[id]/
│       └── page.tsx           # Edit business form
└── api/
    └── businesses/
        ├── route.ts           # GET all businesses, POST new business
        └── [id]/
            └── route.ts       # GET, PUT, DELETE individual business

lib/
└── prisma.ts                  # Prisma client instance

prisma/
└── schema.prisma              # Database schema

public/                        # Static assets
```

## API Endpoints

### Get All Businesses
```
GET /api/businesses
```

### Create Business
```
POST /api/businesses
Content-Type: application/json

{
  "name": "Business Name",
  "category": "Restaurant",
  "address": "123 Main St",
  "phoneNumber": "555-1234",
  "website": "https://example.com",
  "description": "Business description",
  "timing": "9:00 AM - 6:00 PM",
  "logo": "data:image/png;base64,...",
  "coverImages": ["data:image/png;base64,..."]
}
```

### Get Business by ID
```
GET /api/businesses/[id]
```

### Update Business
```
PUT /api/businesses/[id]
Content-Type: application/json
```

### Delete Business
```
DELETE /api/businesses/[id]
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (visual database explorer)

## MongoDB Setup

### Using MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user
4. Get connection string (will look like: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`)
5. Add connection string to `.env.local`

### Using Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/aiwtechsolution`

## Features Guide

### Landing Page
- Introduction to AiWtechsolution
- Quick access to browse listings
- Call-to-action for adding businesses
- Platform features and statistics

### Listings Page
- View all registered businesses
- Search by name or category
- Click on business cards to see details
- Contact information and operating hours displayed

### Admin Dashboard
- Overview of all businesses
- Statistics (total businesses, categories, etc.)
- Quick actions (Edit, Delete)
- Link to add new businesses

### Add Business Form
- Form validation for required fields
- Image upload support (logo and cover images)
- Base64 encoding for image storage
- Visual preview of uploaded images
- Success confirmation and redirect

### Edit Business Form
- Pre-populated form with existing data
- Update any business information
- Add or replace images
- Remove cover images individually

## Troubleshooting

### MongoDB Connection Error
- Verify connection string is correct
- Check MongoDB service is running
- Ensure network access is allowed (for Atlas)

### Prisma Migration Issues
```bash
# Reset database and migrations (warning: deletes all data)
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate
```

### Images Not Displaying
- Ensure images are properly base64 encoded
- Check browser console for errors
- Verify image data is being saved to database

## Future Enhancements

- User authentication and roles
- Business ratings and reviews
- Map integration
- Advanced filtering options
- Email notifications
- Business analytics
- Multi-language support

## License

MIT

## Support

For issues or questions, contact: support@aiwtechsolution.com
