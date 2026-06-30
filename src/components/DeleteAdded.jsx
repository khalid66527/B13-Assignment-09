"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { toast } from "react-toastify";

export function DeleteAdded({ carDetails }) {
    const { carName, _id } = carDetails;
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addCar/${_id}`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Car deleted successfully!");
                if (window.location.pathname.includes('/my-added-cars')) {
                    window.location.reload();
                } else {
                    router.push('/explore-cars'); 
                    router.refresh();            
                }
            } else {
                toast.error(data.message || "Failed to delete car");
            }
        } 
        
         finally {
            setIsDeleting(false);
        }
    };

    return (
        <AlertDialog>
            <Button variant="outline" className="text-red-700 border-red-700 hover:bg-red-50">
                <MdDelete className="mr-1" /> Delete Car
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[420px]">
                        <AlertDialog.CloseTrigger />
                        
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Car permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{carName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline">
                                Cancel
                            </Button>
                            
                            {/* Fixed Button */}
                            <Button 
                                onClick={handleDelete} 
                                variant="danger"
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Deleting..." : (
                                    <>
                                        <MdDelete className="mr-1" /> Delete Car
                                    </>
                                )}
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}