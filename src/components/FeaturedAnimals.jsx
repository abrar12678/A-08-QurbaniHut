import AnimalsCard from './AnimalsCard';

const FeaturedAnimals = async () => {
    const res = await fetch("https://a-08-qurbani-hut.vercel.app/animalsData.json", {
        cache: "no-store" // ✅ Add cache control
    });
    const data = await res.json();
    const featuredCards = data.slice(0, 4);

    return (
        <div className="bg-white py-8">
            <h2 className="text-5xl font-bold text-center text-gray-900 py-5">
                Featured Animals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 my-4">
                {featuredCards.map((animal) => (
                    <AnimalsCard key={animal.id} data={animal} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedAnimals;