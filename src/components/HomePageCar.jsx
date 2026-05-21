import ExploreCars from "@/components/ExploreCars";
import Link from "next/link";

const HomePageCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addCar`, {
        cache: "no-store"   
    });
    const allCars = await res.json();

    const limitedCars = allCars.slice(0, 8);

    return (
        <div className=" bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
                    Explore Our Premium Cars
                </h1>
                <p className="mt-3 text-xl text-gray-500">
                    Discover our exclusive collection
                </p>
                <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Cars Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {limitedCars.map((car) => (
                    <ExploreCars key={car._id} car={car} />
                ))}
            </div>

            {/* See More Button */}
            {allCars.length > 8 && (
                <div className="flex justify-center mt-12">
                    <Link href="/explore-cars">
                        <button className="group px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/30">
                            See All Cars
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                    </Link>
                </div>
            )}

            {/* Empty State */}
            {allCars.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">No cars available at the moment.</p>
                </div>
            )}
        </div>
    );
};

export default HomePageCars;