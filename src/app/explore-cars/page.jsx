"use client";

import { Search } from "@/components/CarSearch";
import ExploreCars from "@/components/ExploreCars";
import { useState, useEffect } from "react";

const ExploreCarsPage = () => {
    const [allCars, setAllCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addCar`)
            .then(res => res.json())
            .then(data => {
                setAllCars(data);
                setFilteredCars(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900">Explore Our Premium Cars</h1>
                <p className="mt-3 text-xl text-gray-500">
                    Found {allCars.length} exclusive vehicles
                </p>
            </div>

            <Search allCars={allCars} onSearch={setFilteredCars} />

            {loading ? (
                <div className="flex flex-col justify-center items-center min-h-screen gap-4">

                    <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>

                    <p className="text-gray-600 text-lg font-medium">
                        Loading...
                    </p>

                </div>
            ) : (
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredCars.map((car) => (
                        <ExploreCars key={car._id} car={car} />
                    ))}
                </div>
            )}

            {!loading && filteredCars.length === 0 && (
                <p className="text-center py-20 text-xl text-gray-500">
                    No cars found matching your search.
                </p>
            )}
        </div>
    );
};

export default ExploreCarsPage;