import Image from 'next/image';
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';
import BuyForm from './BuyForm';

const page = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://a-08-qurbanihut.vercel.app/animalsData.json", {
        cache: "no-store"
    });

    if (!res.ok) {
        return (
            <ProtectedRoute>
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <p className="text-red-500">Failed to fetch data.</p>
                </div>
            </ProtectedRoute>
        );
    }

    const data = await res.json();

    const animal = data.find(
        (item) => item.id === parseInt(id) || item.id === id || String(item.id) === String(id)
    );

    if (!animal) {
        return (
            <ProtectedRoute>
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">Animal Not Found</h2>
                        <p className="text-gray-500">No animal found with ID: {id}</p>
                        <Link href="/all-animals">
                            <button className="btn btn-primary mt-4">
                                ← Back to All Animals
                            </button>
                        </Link>
                    </div>
                </div>
            </ProtectedRoute>
        );
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 py-10">
                <div className="w-full max-w-lg">
                    {/* Back Button */}
                    <Link href="/all-animals">
                        <button className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5" />
                                <path d="M12 19l-7-7 7-7" />
                            </svg>
                            Back to All Animals
                        </button>
                    </Link>

                    {/* Card */}
                    <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={600}
                                height={350}
                                className="w-full h-72 object-cover"
                                priority
                            />
                            <div className="absolute top-4 right-4">
                                <span className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm" style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)" }}>
                                    {animal.category}
                                </span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6 space-y-5">
                            {/* Type & Breed */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-500">{animal.type}</span>
                                <span className="text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 font-medium">
                                    {animal.breed}
                                </span>
                            </div>

                            {/* Name */}
                            <h2 className="text-2xl font-bold text-gray-900">{animal.name}</h2>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">{animal.description}</p>

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-2xl bg-gray-50 border border-gray-100 px-4 py-3">
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Weight</p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">{animal.weight} kg</p>
                                </div>
                                <div className="rounded-2xl bg-gray-50 border border-gray-100 px-4 py-3">
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Age</p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">{animal.age} years</p>
                                </div>
                                <div className="rounded-2xl bg-gray-50 border border-gray-100 px-4 py-3">
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Location</p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">{animal.location}</p>
                                </div>
                                <div className="rounded-2xl bg-gray-50 border border-gray-100 px-4 py-3">
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Category</p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">{animal.category}</p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Price</p>
                                    <p className="mt-1 text-2xl font-bold text-gray-900">
                                        ৳ {animal.price.toLocaleString()}
                                    </p>
                                </div>
                                <span className="rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-700">
                                    Available
                                </span>
                            </div>

                            {/* Buy Form + Browse More */}
                            <div className="flex gap-3 pt-1">
                                <div className="flex-1">
                                    <BuyForm animal={animal} />
                                </div>
                                <Link href="/all-animals" className="flex-1">
                                    <button className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300">
                                        Browse More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default page;
