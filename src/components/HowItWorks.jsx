"use client";

import { FaMagnifyingGlass, FaCalendarDays, FaCheckDouble, FaRoute } from "react-icons/fa6";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            icon: <FaMagnifyingGlass className="text-2xl text-green-500" />,
            title: "Choose Your Car",
            description: "Explore our premium fleet and select the perfect car that suits your exact needs."
        },
        {
            number: "02",
            icon: <FaCalendarDays className="text-2xl text-green-500" />,
            title: "Select Rental Dates",
            description: "Easily choose your pick-up and drop-off times to fit your personal schedule."
        },
        {
            number: "03",
            icon: <FaCheckDouble className="text-2xl text-green-500" />,
            title: "Confirm & Book",
            description: "Complete your quick reservation through our highly secure and verified gateway."
        },
        {
            number: "04",
            icon: <FaRoute className="text-2xl text-green-500" />,
            title: "Hit the Road",
            description: "Pick up the keys, step on the pedal, and enjoy a safe, completely smooth journey!"
        }
    ];

    return (
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                
                {/* Title */}
                <div className="text-center mb-20">
                    <span className="text-sm font-semibold tracking-wider text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full shadow-sm">
                        Simple Steps
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-950 mt-4 tracking-tight">
                        How It <span className="text-green-500">Works</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Renting a premium car has never been this simple. Follow these 4 easy steps to start your rental journey.
                    </p>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Steps Timeline Grid */}
                <div className="relative">
                    
                    {/* Horizontal connecting line for large screens */}
                    <div className="hidden lg:block absolute top-[76px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-green-100 via-green-200 to-green-100 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                className="flex flex-col items-center text-center relative group"
                            >
                                {/* Step Indicator */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
                                    {step.number}
                                </div>

                                {/* Icon Circle Container */}
                                <div className="w-24 h-24 rounded-full bg-green-50 border-4 border-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-green-500 group-hover:text-white mb-6 hover:scale-105">
                                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                                        {step.icon}
                                    </span>
                                </div>

                                {/* Text */}
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
