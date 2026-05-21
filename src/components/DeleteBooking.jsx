"use client";
import { MdDelete } from "react-icons/md"
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function DeleteBooking({ bookingId }) {

    // In your component

const handleCancel = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await res.json();

        if (res.ok) {
            toast.success("Booking cancelled successfully!");
            setTimeout(() => window.location.reload(), 1200);
        } else {
            toast.error(data.message || "Failed to cancel booking");
        }
    } catch (err) {
        toast.error("Something went wrong!");
    }
};
    return (
        <AlertDialog>
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
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>

                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button onClick={handleCancel} slot="close" variant="danger">
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}