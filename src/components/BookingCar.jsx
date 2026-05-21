"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCar = ({ carDetails }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { imageUrl, carName, carType, location, seatCapacity, price, _id } = carDetails;

    const [isBooking, setIsBooking] = useState(false);

    const handleBooking = async (e) => {
        e.preventDefault();                  
        setIsBooking(true);

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        const bookingData = {
            // User Info
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image || user?.imageUrl,

            // Car Info
            carId: _id,
            carName,
            carType,
            imageUrl,
            location,
            price,
            seatCapacity,

          
            driverNeeded: formValues.driverNeeded || "No",
            specialNote: formValues.specialNote || "",

            bookingDate: new Date().toISOString(),
        };
        const {data:tokenData} = await authClient.token()
        console.log(tokenData)

        const res = await fetch('http://localhost:5000/booking',{
          method:'POST',
          headers:{
           "content-type": "application/json",
           authorization: `Bearer ${tokenData?.token}`
          },
          body: JSON.stringify(bookingData)
        })
        const data = await res.json();


        if (res.ok) {
            toast.success("Booking is successfully!");
            setTimeout(() => window.location.reload(), 1200);
        } else {
            toast.error(data.message || "Failed to Booking");
        }

        setIsBooking(false);
    };

    return (
        <AlertDialog>
            <AlertDialog.Trigger asChild>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md transition duration-300">
                    Book Now
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[450px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Heading className="text-2xl font-bold text-center">
                                Confirm Booking
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <form id="bookingForm" onSubmit={handleBooking} className="space-y-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-900">
                                        Driver Needed
                                    </label>
                                    <select 
                                        name="driverNeeded" 
                                        className="select text-white select-bordered w-full rounded-xl"
                                        defaultValue="Yes"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-900">
                                        Special Note (Optional)
                                    </label>
                                    <textarea
                                        name="specialNote"
                                        rows="3"
                                        placeholder="Any special request or note..."
                                        className="textarea text-white textarea-bordered w-full rounded-xl resize-y"
                                    ></textarea>
                                </div>

                                <p className="text-sm text-gray-600 pt-2">
                                    Are you sure you want to book <strong>{carName}</strong>?
                                </p>
                            </form>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                        

                            <Button 
                                type="submit" 
                                form="bookingForm" 
                                slot="close" 
                                disabled={isBooking}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md transition duration-300"
                            >
                                {isBooking ? "Booking..." : "Confirm Booking"}
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCar;