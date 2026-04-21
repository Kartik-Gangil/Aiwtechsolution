'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Business {
    _id: string;
    name: string;
    category: string;
    address: string;
    phoneNumber: string;
    website?: string;
    description: string;
    timing: string;
    logo?: string;
    coverImages: string[];
}

export default function AdminDashboard() {
    const router = useRouter();
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBusinesses();
    }, []);

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

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this business?')) return;

        try {
            const response = await fetch(`/api/businesses/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBusinesses((prev) => prev.filter((b) => b._id !== id));
                alert('Business deleted successfully!');
            } else {
                alert('Error deleting business');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting business');
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
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-600 mt-2">Manage your business listings</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/admin/add"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            + Add Business
                        </Link>
                        <Link
                            href="/"
                            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                        >
                            View Site
                        </Link>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="text-3xl font-bold text-blue-600">{businesses.length}</div>
                        <div className="text-gray-600 mt-2">Total Businesses</div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="text-3xl font-bold text-green-600">
                            {businesses.filter((b) => b.website).length}
                        </div>
                        <div className="text-gray-600 mt-2">With Websites</div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="text-3xl font-bold text-purple-600">
                            {new Set(businesses.map((b) => b.category)).size}
                        </div>
                        <div className="text-gray-600 mt-2">Categories</div>
                    </div>
                </div>

                {/* Businesses Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left">Business Name</th>
                                    <th className="px-6 py-4 text-left">Category</th>
                                    <th className="px-6 py-4 text-left">Phone</th>
                                    <th className="px-6 py-4 text-left">Address</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {businesses.map((business) => (
                                    <tr key={business._id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 font-semibold text-gray-900">{business.name}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {business.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{business.phoneNumber}</td>
                                        <td className="px-6 py-4 text-gray-600 truncate max-w-xs">{business.address}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button
                                                    onClick={() => router.push(`/admin/edit/${business._id}`)}
                                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-sm"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(business._id)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {businesses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg mb-4">No businesses added yet.</p>
                            <Link
                                href="/admin/add"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Add First Business
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
