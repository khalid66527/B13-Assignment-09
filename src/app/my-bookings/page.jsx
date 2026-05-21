import { DeleteBooking } from "@/components/DeleteBooking"
import { auth } from "@/lib/auth"
import { Button } from "@heroui/react"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRightFromBracket, FaLocationDot } from "react-icons/fa6"



const MyBooking = async () => {
    const session = await auth.api.getSession({
        headers: await headers()

    })
    const {token} =await auth.api.getToken({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,{
        headers: {
                    authorization: `Bearer ${token}`
                }
    })
    const bookings = await res.json()
    console.log("data", bookings)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-white text-center my-4">My Booking Cars</h1>
            <p className="text-center text-gray-300 text-sm md:text-base mb-8">
                View all your booked cars, manage bookings, and track your rental history in one place.
            </p>
            <div>
                {
                    bookings.length === 0 ? (
                        <div className="w-full flex items-center justify-center py-16">
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-10 py-8 shadow-md text-center hover:shadow-xl transition-all duration-300">

                                <p className="text-2xl font-semibold text-gray-800">
                                    No bookings found
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    You haven’t booked any cars yet.
                                </p>

                                <Link
                                    href="/explore-cars"
                                    className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-green-200 transition-all duration-200"
                                >
                                    Booking Now <FaArrowRightFromBracket />
                                </Link>

                            </div>
                        </div>
                    ) : (
                        bookings.map(booking => (
                            <div
                                key={booking._id}
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
                                                src={booking.imageUrl}
                                                alt={booking.carName}
                                                className="w-full h-full object-cover 
                                                   transition-transform duration-500 
                                                   group-hover:scale-105"
                                            />
                                        </div>

                                        {/* DETAILS */}
                                        <div className="space-y-1">
                                            <p className="text-2xl font-bold text-gray-900">
                                                {booking.carName}
                                            </p>

                                            <p className="text-gray-900 text-lg">
                                                <span className="flex items-center gap-2"><FaLocationDot /> {booking.location}</span>
                                            </p>

                                            <p className="text-2xl font-semibold text-green-600">
                                                <span className="text-3xl">৳</span> {booking.price}
                                            </p>

                                            <p className="text-lg text-gray-800">
                                               <span className="font-bold">Booking Date :</span> {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                })}
                                            </p>
                                            <p className=" text-gray-900 text-lg"> <span className="font-bold">Added by :</span>{booking.userName}</p>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE BUTTONS */}
                                    <div className="flex flex-col gap-4">
                                        <DeleteBooking bookingId={booking._id}></DeleteBooking>



                                        {/* <Button
                                            variant="outline"
                                            className="bg-green-500 hover:bg-green-600 text-white 
                                               text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md 
                                               transition-all duration-300
                                               hover:-translate-y-1 hover:shadow-green-200"
                                        >
                                            View User
                                        </Button> */}

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

export default MyBooking

