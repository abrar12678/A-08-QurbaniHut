import AnimalsCard from '../../components/AnimalsCard';
import ProtectedRoute from '@/components/ProtectedRoute';

const AllAnimalsPage = async () => {
    const res = await fetch("https://a-08-qurbanihut.vercel.app/animalsData.json", {
        cache: "no-store"
    });

    if (!res.ok) {
        return <p className="text-red-500 text-center">Failed to load animals data.</p>;
    }

    const data = await res.json();

    return (
        <ProtectedRoute>
            <div className="container mx-auto px-4 py-10">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        All <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">Animals</span>
                    </h1>
                    <p className="mt-3 text-gray-500">Browse our premium livestock collection for Qurbani</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((animal) => (
                        <AnimalsCard key={animal.id} data={animal} />
                    ))}
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default AllAnimalsPage;
