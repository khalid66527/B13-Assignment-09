import { FaLocationDot } from "react-icons/fa6"
import { LuTypeOutline } from "react-icons/lu"
import { MdReduceCapacity } from "react-icons/md"

const CarDetailsPage = async ({ params }) => {
    const { id } = await params
    console.log(id)
    const res = await fetch(`http://localhost:5000/addCar/${id}`)
    const carDetails = await res.json()
    const { imageUrl, carName, availability, carType, location, seatCapacity, price, _id, description } = carDetails
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-zinc-200 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/70 backdrop-blur-md rounded-[32px] shadow-2xl overflow-hidden border border-white/50 p-6 sm:p-10 lg:p-12">

                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="relative h-[400px] sm:h-[500px] md:h-[550px] w-full rounded-[24px] overflow-hidden group shadow-lg">
                            <img
                                src={imageUrl || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"}
                                alt={carName}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute top-6 left-6 flex gap-2">
                                <span className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg backdrop-blur-md text-white ${availability === 'Available' ? 'bg-emerald-500/90' : 'bg-rose-500/90'
                                    }`}>
                                    {availability}
                                </span>
                                <span className="text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg bg-slate-900/80 backdrop-blur-md text-white">
                                    {carType}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between lg:pl-6">

                       
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
                                <FaLocationDot /> {location}
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl sm:text-3xl font-extrabold text-gray-900 mt-5 leading-tight">
                                {carName}
                            </h1>

                          
                            <div className="w-20 h-1 bg-emerald-500 rounded-full mt-5 mb-6"></div>

                            {/* Description */}
                            <div className="space-y-2 mb-6">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                    Overview
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {description}
                                </p>
                            </div>

                       
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 hover:shadow-md transition">
                                    <span className="text-xl bg-emerald-100 text-emerald-600 p-2 rounded-lg">
                                        <MdReduceCapacity />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Capacity</p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {seatCapacity} Seats
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 hover:shadow-md transition">
                                    <span className="text-xl bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <LuTypeOutline />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Type</p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {carType}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Bottom Pricing Box */}
                        <div className="mt-10 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

                            {/* Price */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Price Per Day</p>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        ৳{price}
                                    </h2>
                                </div>

                                <span className={`px-3 py-1 text-xs rounded-full font-semibold ${availability === "available"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-500"
                                    }`}>
                                    {availability}
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <button className="w-full border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white py-3 rounded-xl font-semibold transition duration-300">
                                     Add to Cart
                                </button>

                                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md transition duration-300">
                                 Book Now
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default CarDetailsPage;