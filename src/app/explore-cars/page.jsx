"use client";

import ExploreCars from "@/components/ExploreCars";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdReduceCapacity } from "react-icons/md";

const ExploreCarsPage = async () => {



    const res = await fetch('http://localhost:5000/addCar')
    const allCars = await res.json()


   



    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
                    Explore Our Premium Cars
                </h1>
                <p className="mt-3 text-xl text-gray-500">
                    Found {allCars.length} exclusive vehicles for you
                </p>
                <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
           
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allCars.map((car) => (
                    <ExploreCars key={car._id} car={car} />
                ))}
            </div>

            

          
            {/* Empty State */}
            {allCars.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">No cars match your search query.</p>
                </div>
            )}
        </div>
    );
};

export default ExploreCarsPage;