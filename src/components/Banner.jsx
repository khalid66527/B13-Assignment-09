"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";

const images = [
  "/assets/banner(1).jpg",
  "/assets/banner(2).jpg",
  "/assets/banner(3).jpg",
  "/assets/banner(4).jpg",
  "/assets/banner(5).jpg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={images[current]}
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-1000"
        alt="banner"
      />

      {/* Dark + Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-green-900/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl">

            {/* Badge */}
            <p className="inline-block px-4 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mb-4">
               Easy Car Rental Platform
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Rent Your <span className="text-green-400">Dream Car</span> in Seconds
            </h1>

            {/* Description */}
            <p className="mt-5 text-gray-200 text-lg leading-relaxed">
              Find, book, and drive premium cars anywhere in Bangladesh.
              Fast booking, verified cars, and best prices guaranteed.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link href="/explore-cars">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
                   Explore Cars
                </button>
              </Link>

              <Link href="/add-car">
                <button className="border flex items-center gap-2  border-white/40 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                  <span className="text-2xl"><CiSquarePlus /></span> Add Your Car
                </button>
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-all ${
              current === i ? "bg-green-400 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Banner;