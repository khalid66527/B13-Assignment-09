"use client"

import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdReduceCapacity } from "react-icons/md";

const ExploreCars = ({ car }) => {
    // console.log(car);
    const {imageUrl,carName, availability ,carType,location,seatCapacity,price,_id }= car
    
    return (
       
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between border border-gray-100">
            
            {/* Image Section */}
            <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                <img 
                    src={imageUrl || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600"} 
                    alt={carName} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full shadow-md text-white ${
                    availability === 'Available' ? 'bg-green-600' : 'bg-red-500'
                }`}>
                    {availability}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-5 flex-grow">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider text-green-500 uppercase">
                        {carType}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FaLocationDot /> {location}
                    </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mt-1 line-clamp-1">
                    {carName}
                </h2> 

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-4 border-t border-gray-100 pt-3">
                    <span><MdReduceCapacity /></span>
                    <span>Capacity: <strong>{seatCapacity} Seats</strong></span>
                </div>
            </div>

            {/* Footer / Price Section */}
            <div className="p-5 pt-0 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="mt-3">
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="text-xl font-black text-gray-950">
                        {price ? `$${Number(price).toLocaleString()}` : 'Negotiable'}
                    </p>
                </div>
                <Link 
                    href={`/explore-cars/${car._id}`}
                    className="mt-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-green-200 transition-colors duration-200 text-center"
                >
                    View Details
                </Link>
            </div>

        </div>
    );
};

export default ExploreCars;