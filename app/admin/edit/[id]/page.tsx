'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface FormData {
    name: string;
    category: string;
    address: string;
    phoneNumber: string;
    website: string;
    description: string;
    timing: string;
    logo: string;
    googleMap: string;
    appleMap: string;
    yelp: string;
    coverImages: string[];
}

export default function AdminEditBusiness() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        category: '',
        address: '',
        phoneNumber: '',
        website: '',
        description: '',
        timing: '',
        logo: '',
        googleMap: '',
        appleMap: '',
        yelp: '',
        coverImages: [],
    });

    useEffect(() => {
        fetchBusiness();
    }, [id]);

    const fetchBusiness = async () => {
        try {
            const response = await fetch(`/api/businesses/${id}`);
            const data = await response.json();
            setFormData(data);
        } catch (error) {
            console.error('Error fetching business:', error);
            alert('Error loading business');
            router.push('/admin');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'coverImages') => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                if (field === 'logo') {
                    setFormData((prev) => ({
                        ...prev,
                        logo: base64String,
                    }));
                } else {
                    setFormData((prev) => ({
                        ...prev,
                        coverImages: [...(prev.coverImages || []), base64String],
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch(`/api/businesses/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update business');
            }

            router.push('/admin');
            alert('Business updated successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Error updating business');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Business</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Business Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Business Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter business name"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Category *
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Restaurant, Hotel, Retail"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Address *
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter full address"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter phone number"
                            />
                        </div>

                        {/* Website */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Website (Optional)
                            </label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com"
                            />
                        </div>
                        {/* Google map */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                GOOGLE MAP (Optional)
                            </label>
                            <input
                                type="url"
                                name="googleMap"
                                value={formData.googleMap}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com"
                            />
                        </div>
                        {/* apple map */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                APPLE MAP (Optional)
                            </label>
                            <input
                                type="url"
                                name="appleMap"
                                value={formData.appleMap}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com"
                            />
                        </div>
                        {/* yelp */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                YELP (Optional)
                            </label>
                            <input
                                type="url"
                                name="yelp"
                                value={formData.yelp}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter business description"
                            />
                        </div>

                        {/* Timing */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Timing (Hours) *
                            </label>
                            <input
                                type="text"
                                name="timing"
                                value={formData.timing}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., 9:00 AM - 6:00 PM"
                            />
                        </div>

                        {/* Logo */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Logo (Optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, 'logo')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.logo && (
                                <div className="mt-2 relative w-20 h-20">
                                    <img src={formData.logo} alt="Logo preview" className="w-full h-full object-cover rounded" />
                                </div>
                            )}
                        </div>

                        {/* Cover Images */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Cover Images (Optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => {
                                    Array.from(e.target.files || []).forEach((file) => {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            const base64String = reader.result as string;
                                            setFormData((prev) => ({
                                                ...prev,
                                                coverImages: [...(prev.coverImages || []), base64String],
                                            }));
                                        };
                                        reader.readAsDataURL(file);
                                    });
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formData.coverImages && formData.coverImages.length > 0 && (
                                <div className="mt-2 grid grid-cols-3 gap-2">
                                    {formData.coverImages.map((img, index) => (
                                        <div key={index} className="relative w-20 h-20">
                                            <img src={img} alt={`Cover ${index}`} className="w-full h-full object-cover rounded" />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        coverImages: prev.coverImages.filter((_, i) => i !== index),
                                                    }));
                                                }}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
                            >
                                {submitting ? 'Updating...' : 'Update Business'}
                            </button>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
