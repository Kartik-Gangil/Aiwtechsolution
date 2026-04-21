'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Business {
    id: string;
    name: string;
    category: string;
    address: string;
    phoneNumber: string;
    website?: string;
    googleMap?: string;
    appleMap?: string;
    yelp?: string;
    description: string;
    timing: string;
    logo?: string;
    coverImages: string[];
}

export default function ListingsPage() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const response = await fetch('/api/businesses');
                const data = await response.json();
                setBusinesses(data);
            } catch (error) {
                console.error('Error fetching businesses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBusinesses();
    }, []);

    const filteredBusinesses = businesses.filter((b) =>
        b.name.toLowerCase().includes(filter.toLowerCase()) ||
        b.category.toLowerCase().includes(filter.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-semibold">Loading businesses...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Listings</h1>
                    <input
                        type="text"
                        placeholder="Search by name or category..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBusinesses.map((business) => (
                        <div
                            key={business.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            {/* Cover Image */}
                            {business.coverImages && business.coverImages.length > 0 && (
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src={business.coverImages[0]}
                                        alt={business.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6">
                                {/* Logo and Name */}
                                <div className="flex items-start mb-4">
                                    {business.logo && (
                                        <Image
                                            src={business.logo}
                                            alt={business.name}
                                            width={64}
                                            height={64}
                                            className="rounded-lg mr-4 object-cover"
                                        />
                                    )}
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{business.name}</h2>
                                        <p className="text-sm text-blue-600 font-semibold">{business.category}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{business.description}</p>

                                {/* Details */}
                                <div className="space-y-2 mb-4 text-sm">
                                    <div className="flex items-start">
                                        <span className="font-semibold text-gray-700 mr-2 min-w-fit">📍 Address:</span>
                                        <span className="text-gray-600">{business.address}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-700 mr-2">📞 Phone:</span>
                                        <a href={`tel:${business.phoneNumber}`} className="text-blue-600 hover:underline">
                                            {business.phoneNumber}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-700 mr-2">⏰ Timing:</span>
                                        <span className="text-gray-600">{business.timing}</span>
                                    </div>
                                    {business.website && (
                                        <div className="flex items-center">
                                            <span className="font-semibold text-gray-700 mr-2">🌐 Website:</span>
                                            <a
                                                href={business.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline text-xs truncate"
                                            >
                                                Visit
                                            </a>
                                        </div>
                                    )}
                                    {business.googleMap && (
                                        <div className="flex items-center">
                                            <span className="font-semibold text-gray-700 mr-2">🌐 Google Map:</span>
                                            <a
                                                href={business.googleMap}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline text-xs truncate"
                                            >
                                                Visit
                                            </a>
                                        </div>
                                    )}
                                    {business.appleMap && (
                                        <div className="flex items-center">
                                            <span className="font-semibold text-gray-700 mr-2">🌐 Apple Map:</span>
                                            <a
                                                href={business.appleMap}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline text-xs truncate"
                                            >
                                                Visit
                                            </a>
                                        </div>
                                    )}
                                    {business.yelp && (
                                        <div className="flex items-center">
                                            <span className="font-semibold text-gray-700 mr-2">🌐 Yelp:</span>
                                            <a
                                                href={business.yelp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline text-xs truncate"
                                            >
                                                Visit
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredBusinesses.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No businesses found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
