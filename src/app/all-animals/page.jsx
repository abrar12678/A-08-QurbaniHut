import Image from 'next/image';
import Link from 'next/link';

const AllAnimalsPage = async () => {
    const res = await fetch("https://a-08-qurbani-hut.vercel.app/animalsData.json", {
        cache: "no-store"
    });

    if (!res.ok) {
        return <p className="text-red-500 text-center">Failed to load animals data.</p>;
    }

    const data = await res.json();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto p-4">
            {data.map((animal) => (
                <div key={animal.id} className="card p-4 bg-base-100 shadow-sm border">
                    {/* <figure>
                        <Image
                            src={`../public/screenroad-FquDp5N1Gw0-unsplash.jpg`}   // ✅ use animal.image not null
                            alt={animal.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </figure> */}
                    <div className="card-body space-y-2">
                        <h2 className="card-title text-bold text-lg">{animal.name}</h2>
                        <p>{animal.description}</p>
                        <p className="text-lg font-bold text-green-500">
                            BDT - {animal.price.toLocaleString()}
                        </p>
                        <div className="card-actions justify-end">
                            <Link href={`/all-animals/${animal.id}`}>
                                <button className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] text-white px-4 py-2 rounded hover:brightness-95 transition">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllAnimalsPage;