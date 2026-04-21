import { NextResponse } from 'next/server';
import Business from '@/model/business';
import connectDB from '@/lib/mongodb';
import cloudinary from "@/lib/cloudinary";
import generateDescription from '@/lib/genai'

export async function GET() {
  try {
    await connectDB();
    const businesses = await Business.find().sort({ createdAt: -1 });
    return NextResponse.json(businesses);
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return NextResponse.json({ error: 'Failed to fetch businesses' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    // 🔒 Validate required fields
    if (!body.name || !body.category || !body.logo) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    let description = "";
    if (body.description == "") {
      description = (await generateDescription(body.name, body.category, body.address)) ?? "";
    }
    // 🚀 Upload LOGO
    let logoUrl = null;

    if (body.logo?.startsWith("data:image")) {
      const uploadResponse = await cloudinary.uploader.upload(body.logo, {
        folder: "business/logos",
      });

      logoUrl = uploadResponse.secure_url;
    }

    // 🚀 Upload COVER IMAGES (multiple)
    let coverImageUrls: string[] = [];

    if (Array.isArray(body.coverImages) && body.coverImages.length > 0) {
      const uploads = body.coverImages.map((img: string) => {
        if (img.startsWith("data:image")) {
          return cloudinary.uploader.upload(img, {
            folder: "business/covers",
          });
        }
      });

      const results = await Promise.all(uploads);
      coverImageUrls = results.map((res) => res.secure_url);
    }

    // 💾 Save to DB
    const business = await Business.create({
      name: body.name,
      category: body.category,
      address: body.address || "",
      phoneNumber: body.phoneNumber || "",
      website: body.website || "",
      description: body.description || description,
      googleMap: body.googleMap || "",
      appleMap: body.appleMap || "",
      yelp: body.yelp || "",
      timing: body.timing || "",
      logo: logoUrl,
      coverImages: coverImageUrls,
    });

    return NextResponse.json(business, { status: 201 });

  } catch (error) {
    console.error("Error creating business:", error);
    return NextResponse.json(
      { error: "Failed to create business" },
      { status: 500 }
    );
  }
}