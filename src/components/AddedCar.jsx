"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddedCar = ({ carDetails }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { imageUrl, carName, carType, location, seatCapacity, price, _id } = carDetails;

    const [isAdded, setIsAdded] = useState(false);

    const handleBooking = async (e) => {

        const AddedData = {
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

            addedDate: new Date().toISOString(),
        };
        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addedData`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(AddedData)
        })
        const data = await res.json();
        if (res.ok) {
            toast.success("Added is successfully!");
            setTimeout(() => window.location.reload(), 1200);
        } else {
            toast.error(data.message || "Failed to Added");
        }
        console.log(data)


        console.log("Final Added Data:", AddedData);
        setIsBooking(false);
    };

    return (
        <AlertDialog>
            <AlertDialog.Trigger asChild>
                <button className="w-full border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white py-3 rounded-xl font-semibold transition duration-300">
                    Add to Cart
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[450px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Heading className="text-2xl font-bold text-center">
                                Confirm Added To Car
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>

                        </AlertDialog.Body>

                        <AlertDialog.Footer>


                            <Button
                                onClick={handleBooking}
                                type="submit"
                                form="bookingForm"
                                slot="close"
                                disabled={isAdded}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md transition duration-300"
                            >
                                {isAdded ? "Addeding..." : "Confirm Added"}
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default AddedCar;