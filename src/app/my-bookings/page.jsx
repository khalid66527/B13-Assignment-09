import { auth } from "@/lib/auth"
import { Button } from "@heroui/react"
import { headers } from "next/headers"
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6"
import { MdDelete } from "react-icons/md"


const MyBooking = async () => {
    const session = await auth.api.getSession({
        headers: await headers()

    })
    const user = session?.user
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const bookings = await res.json()
    console.log("data", bookings)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">My Booking Cars</h1>

            <div>
                {
                    bookings.length === 0 ? (
                        <p>No bookings found</p>
                    ) : (
                        bookings.map(booking => (
                            <div
                                key={booking._id}
                                className=" backdrop-blur-lg border
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
                                            <p className="text-xl font-bold text-gray-900">
                                                {booking.carName}
                                            </p>

                                            <p className="text-gray-900 text-sm">
                                                <span className="flex items-center gap-2"><FaLocationDot /> {booking.location}</span>
                                            </p>

                                            <p className="text-lg font-semibold text-green-600">
                                                <span className="text-3xl">৳</span> {booking.price}
                                            </p>

                                            <p className="text-sm text-gray-800">
                                                Booking Date: {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE BUTTONS */}
                                    <div className="flex flex-col gap-4">

                                        <Button
                                            variant="outline"
                                            className="text-red-700 border-red-700 
                                               px-5 py-2.5 rounded-xl
                                               transition-all duration-300
                                               hover:bg-red-50 
                                               hover:-translate-y-1 hover:shadow-md"
                                        >
                                            <MdDelete className="mr-1" /> Cancel Booking
                                        </Button>

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

// bookingDate
// :
// "2026-05-20T06:57:35.532Z"
// carId
// :
// "6a0d46d0372f18e09f927f73"
// carName
// :
// "Toyota Corolla"
// carType
// :
// "Luxury"
// driverNeeded
// :
// "Yes"
// imageUrl
// :
// "https://cdn.pixabay.com/photo/2020/03/25/12/41/beach-4967176_640.jpg"
// location
// :
// "MYMENSINGH"
// price
// :
// "1200"
// seatCapacity
// :
// "5"
// specialNote
// :
// "ami book korte parchi "
// userEmail
// :
// "khalidhasan678954321@gmail.com"
// userId
// :
// "6a0cc32b02d2f64053a2e31b"
// userImage
// :
// "https://lh3.googleusercontent.com/a/ACg8ocLC6kO0Hs08Df72p3ernu6YN0XnCN9FQdgzemAslTB0GOQ9gQ8=s96-c"
// userName
// :
// "Khalid Hasan"
// _id
// :
// "6a0d5b5f6e93587ea9638f77"