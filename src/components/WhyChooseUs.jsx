"use client";

import { FaCar, FaCircleCheck, FaClock, FaShieldHalved } from "react-icons/fa6";

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <FaCar className="text-3xl text-green-500" />,
            title: "Premium Fleet Selection",
            description: "From elegant sedans to spacious SUVs and luxury rides, find a vehicle tailored for any journey."
        },
        {
            icon: <FaCircleCheck className="text-3xl text-green-500" />,
            title: "Guaranteed Best Rates",
            description: "No hidden charges. Enjoy full price transparency and budget-friendly rental options everyday."
        },
        {
            icon: <FaClock className="text-3xl text-green-500" />,
            title: "24/7 Seamless Assistance",
            description: "Our dedicated support team and robust roadside assistance are always active to guide your way."
        },
        {
            icon: <FaShieldHalved className="text-3xl text-green-500" />,
            title: "Safe & Fully Insured",
            description: "Drive with absolute peace of mind. Every vehicle in our listing is completely verified and insured."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Title */}
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold tracking-wider text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full shadow-sm">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-950 mt-4 tracking-tight">
                        Experience the <span className="text-green-500">CarPark</span> Difference
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We blend cutting-edge technology with premium customer service to deliver the ultimate car rental experience.
                    </p>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div 
                            key={index}
                            className="bg-white/80 backdrop-blur-md border border-gray-100 hover:border-green-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:text-white mb-6 shadow-sm">
                                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    {reason.icon}
                                </span>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                {reason.title}
                            </h3>
                            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
