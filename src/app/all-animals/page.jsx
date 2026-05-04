import AnimalsCard from '../../components/AnimalsCard';

const AllAnimalsPage = async () => {
    const res = await fetch("https://a-08-qurbanihut.vercel.app/animalsData.json", {
        cache: "no-store"
    });

    if (!res.ok) {
        return <p className="text-red-500 text-center">Failed to load animals data.</p>;
    }

    const data = await res.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">All Animals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((animal) => (
                    <AnimalsCard key={animal.id} data={animal} />
                ))}
            </div>
        </div>
    );
};

export default AllAnimalsPage;