"use client";
import { MdDelete } from "react-icons/md"
import { AlertDialog, Button } from "@heroui/react";

export function DeleteBooking({bookingId}) {
    console.log("bookingiddddddddd",bookingId)
    const handleCalcel = async()=>{
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method:"DELETE",
            headers: {
                'content-type':'application/json'
            }
        })
        const data = await res.json()
        window.location.reload()
    }
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
                            
                            <Button onClick={handleCalcel} slot="close" variant="danger">
                                Cancel Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}