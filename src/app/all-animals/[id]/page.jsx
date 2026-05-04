import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
    // ✅ Await params for Next.js 15
    const { id } = await params;

    const res = await fetch("https://a-08-qurbanihut.vercel.app/animalsData.json", {
        cache: "no-store"
    });

    if (!res.ok) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-red-500">Failed to fetch data.</p>
            </div>
        );
    }

    const data = await res.json();

    // ✅ Try both string and number comparison to be safe
    const animal = data.find(
        (item) => item.id === parseInt(id) || item.id === id || String(item.id) === String(id)
    );

    if (!animal) {
        return (
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
        );
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="card p-6 bg-white shadow-lg border border-gray-200 rounded-xl w-full max-w-md mx-auto">
                <figure>
                    <Image
                        src={animal.image}
                        alt={animal.name}
                        width={300}
                        height={200}
                        className="w-full h-56 object-cover rounded-lg"
                        priority
                    />
                </figure>
                <div className="card-body space-y-3 mt-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">{animal.type}</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {animal.breed}
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{animal.name}</h2>
                    <p className="text-gray-700">{animal.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <div><span className="font-semibold">Weight:</span> {animal.weight} kg</div>
                        <div><span className="font-semibold">Age:</span> {animal.age} years</div>
                        <div><span className="font-semibold">Location:</span> {animal.location}</div>
                        <div><span className="font-semibold">Category:</span> {animal.category}</div>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                        BDT - {animal.price.toLocaleString()}
                    </p>
                    <div className="flex gap-3 justify-between pt-2">
                        <button className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] text-white px-4 py-2 rounded hover:brightness-95 transitionflex-1">Buy Now</button>
                        <Link href="/all-animals" className="flex-1">
                            <button className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] text-white px-4 py-2 rounded hover:brightness-95 transition flex-1">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;