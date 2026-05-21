
import { CancelAddedCar } from "@/components/CancelAddedCar";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import Link from "next/link";
import { FaArrowRightFromBracket, FaLocationDot } from "react-icons/fa6";

const AddedCarPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/added/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const addeds = await res.json()
    console.log(addeds)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-white text-center my-4">My Addeds Cars</h1>
            <p className="text-center text-gray-300 text-sm md:text-base mb-8">
                View all your Added cars, manage Addeds, and track your rental history in one place.
            </p>
            <div>
                {
                    addeds.length === 0 ? (
                        <div className="w-full flex items-center justify-center py-16">
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-10 py-8 shadow-md text-center hover:shadow-xl transition-all duration-300">

                                <p className="text-2xl font-semibold text-gray-800">
                                    No Addeds found
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    You haven’t Added any cars yet.
                                </p>

                                <Link
                                    href="/explore-cars"
                                    className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-green-200 transition-all duration-200"
                                >
                                    Added Now <FaArrowRightFromBracket />
                                </Link>

                            </div>
                        </div>
                    ) : (
                        addeds.map(added => (
                            <div
                                key={added._id}
                                className=" bg-green-500 border
           rounded-2xl p-6 mb-6 
           shadow-sm hover:shadow-xl 
           transition-all duration-300 
           hover:-translate-y-1 group bg-white"
                            >
                                <div className="flex justify-between items-center">

                                    {/* LEFT SIDE */}
                                    <div className="flex gap-6 items-center">

                                        {/* BIG IMAGE */}
                                        <div className="overflow-hidden rounded-xl w-[250px] h-[180px]">
                                            <img
                                                src={added.imageUrl}
                                                alt={added.carName}
                                                className="w-full h-full object-cover 
                                                   transition-transform duration-500 
                                                   group-hover:scale-105"
                                            />
                                        </div>

                                        {/* DETAILS */}
                                        <div className="space-y-1">
                                            <p className="text-2xl font-bold text-gray-900">
                                                {added.carName}
                                            </p>

                                            <p className="text-gray-900 text-lg">
                                                <span className="flex items-center gap-2"><FaLocationDot /> {added.location}</span>
                                            </p>

                                            <p className="text-2xl font-semibold text-green-600">
                                                <span className="text-3xl">৳</span> {added.price}
                                            </p>

                                            <p className="text-lg text-gray-900" suppressHydrationWarning>
                                                <span className="font-bold">Addeds Date:</span> {new Date(added.addedDate).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                })}
                                            </p>
                                            <p className=" text-gray-900 text-lg"> <span className="font-bold">Added by :</span>{added.userName}</p>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE BUTTONS */}
                                    <div className="flex flex-col gap-4">

                                        <CancelAddedCar addedId={added._id}></CancelAddedCar>

                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default AddedCarPage;