import { NextResponse } from 'next/server';
import Business from '@/model/business';
import connectDB from '@/lib/mongodb';
import cloudinary from "@/lib/cloudinary";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectDB();
        const business = await Business.findById(id);

        if (!business) {
            return NextResponse.json({ error: 'Business not found' }, { status: 404 });
        }

        return NextResponse.json(business);
    } catch (error) {
        console.error('Error fetching business:', error);
        return NextResponse.json({ error: 'Failed to fetch business' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectDB();
        const body = await request.json();
        console.log(body)
        // 🔒 Validate required fields
        if (!body.name || !body.category || !body.logo) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
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
            const uploads = await Promise.all(
                body.coverImages.map(async (img: string) => {
                    // ✅ If new image (base64) → upload
                    if (img.startsWith("data:image")) {
                        const res = await cloudinary.uploader.upload(img, {
                            folder: "business/covers",
                        });
                        return res.secure_url;
                    }

                    // ✅ If already a URL → keep it
                    return img;
                })
            );

            coverImageUrls = uploads;
        }

        const business = await Business.findByIdAndUpdate(
            id,
            {
                $set: {
                    name: body.name,
                    category: body.category,
                    address: body.address,
                    phoneNumber: body.phoneNumber,
                    website: body.website || "",
                    googleMap: body.googleMap || "",
                    appleMap: body.appleMap || "",
                    yelp: body.yelp || "",
                    description: body.description,
                    timing: body.timing,
                    logo: logoUrl || null,
                    coverImages: coverImageUrls || [],
                },
            },
            { new: true }
        );

        return NextResponse.json(business);
    } catch (error) {
        console.error('Error updating business:', error);
        return NextResponse.json({ error: 'Failed to update business' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectDB();
        const data = await Business.findByIdAndDelete(id);

        if (!data) return NextResponse.json({ error: 'Business not found' }, { status: 404 });

        return NextResponse.json({ message: 'Business deleted successfully' });
    } catch (error) {
        console.error('Error deleting business:', error);
        return NextResponse.json({ error: 'Failed to delete business' }, { status: 500 });
    }
}
