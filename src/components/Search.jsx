"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("a"); // Default search input
    const [error, setError] = useState("");   // Error message for handling API issues
    const [meals, setMeals] = useState([]);   // Initialize as an array to avoid .map issues

    const loadData = async () => {
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
            );
            const data = await res.json();

            if (Array.isArray(data.meals)) {
                setMeals(data.meals);
                setError("");
            } else {
                setMeals([]);
                setError("No meals found for this search.");
            }
        } catch (error) {
            console.error("Error fetching meals:", error);
            setError("")


        }
    };

    const searchHandle = (e) => {
        setSearch(e.target.value); // Update search state dynamically
    };

    const clearSearch = () => {

        loadData();      // Reload default data
    };

    useEffect(() => {
        loadData(); // Load initial data
    }, []);

    return (
        <div className="mx-auto container">
            <div className="text-center my-10">
                {/* Input for search */}
                <input
                    type="text"
                    className="p-2 border text-black rounded-md"
                    placeholder="Search any Meals..."
                    value={search}
                    onChange={searchHandle}
                />
                {/* Search button */}
                <button className="bg-blue-600 text-white p-2 ml-2 rounded-md" onClick={loadData}>
                    Search
                </button>

                {/* Meals Display */}
                <div className="mt-10 grid grid-cols-4 gap-4">
                    {meals.length > 0 && !error ? (
                        meals.map((meal) => (
                            <div key={meal.idMeal} className="mb-4 border p-4 h-full w-full">
                                <Image
                                    src={meal?.strMealThumb}
                                    alt={meal?.strMeal}
                                    height={500}
                                    width={500}
                                     
                                />
                                <h1 className="text-lg font-bold">{meal.strMeal}</h1>
                                <p>{meal.strInstructions}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p className="text-red-500">{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
