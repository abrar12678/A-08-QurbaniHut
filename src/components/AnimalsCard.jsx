import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link

const AnimalsCard = ({ data }) => {
    return (
        <div className="card p-4 bg-white shadow-sm border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <figure>
                {/* ✅ Use dynamic animal image instead of hardcoded path */}
                <Image
                    src={data.image}
                    alt={data.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-bold text-lg">{data.name}</h2>
                <p className="text-gray-700 line-clamp-2">{data.description}</p>
                <p className="text-lg font-bold text-green-600">BDT - {data.price.toLocaleString()}</p>
                <div className="card-actions justify-end gap-2">
                    <Link href={`/all-animals/${data.id}`}>
                        <button className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] text-white px-4 py-2 rounded hover:brightness-95 transition">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalsCard;