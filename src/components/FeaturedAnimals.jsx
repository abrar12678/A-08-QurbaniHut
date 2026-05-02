import React from 'react';


const FeaturedAnimals = async () => {
    // const res = await fetch("https://localhost:3000/data/animalsData.json");
    // const data = await res.json();
    return (
        <div>
            {/* <h2 className="text-5xl font-bold text-center text-black bg-white py-5">
                Featured Animals
            </h2>
            <div className="grid grid-cols-3 gap-6 px-10 py-5">
                {data.map((animal) => (
                    <div key={animal.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover rounded-md" />
                        <h3 className="text-xl font-bold mt-2">{animal.name}</h3>
                        <p className="text-gray-600">{animal.description}</p>
                        <p className="text-lg font-bold text-green-500">${animal.price.toLocaleString()}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default FeaturedAnimals;