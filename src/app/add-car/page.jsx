"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const AddCarFormPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSubmitform = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const formFields = Object.fromEntries(formData.entries())
        console.log(formFields)
        for (const key in formFields) {
            if (!formFields[key]) {
                toast.error(`${key} is required ❗`);
                return;
            }
        }
        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const newCarObject = {
            ...formFields,
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            addedDate: new Date().toISOString(),
            booking_count: 0
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addCar`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(newCarObject)
        })
        const data = await res.json();


        if (data.insertedId || data.acknowledged) {
            toast.success("Car added successfully");
        } else {
            toast.error("Something went wrong");
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">

            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        <span className="text-green-500">Add</span> New Car
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Fill up the form to list your car for rental
                    </p>
                </div>


                {/* Form */}
                <form onSubmit={handleSubmitform} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Car Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Car Name</label>
                        <input
                            type="text"
                            name="carName"
                            placeholder="e.g. Toyota Corolla"
                            className="input text-white input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Daily Rent Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="e.g. 2000"
                            className="text-white input input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    {/* Car Type */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Car Type</label>
                        <select name="carType" className="select select-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200">
                            <option value="">Select Type</option>
                            <option>SUV</option>
                            <option>Sedan</option>
                            <option>Hatchback</option>
                            <option>Luxury</option>
                        </select>
                    </div>

                    {/* Seat Capacity */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Seat Capacity</label>
                        <input
                            name="seatCapacity"
                            type="number"
                            placeholder="e.g. 5"
                            className="input text-white input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Image URL</label>
                        <input
                            name="imageUrl"
                            type="text"
                            placeholder="https://imgbb.com/your-image"
                            className="input text-white input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Pickup Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="Dhaka, Bangladesh"
                            className="input text-white input-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                    </div>

                    {/* Availability */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Availability</label>
                        <select name="availability" className="select select-bordered text-white w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200">
                            <option>Available</option>
                            <option>Unavailable</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            placeholder="Write car details..."
                            className="textarea text-white textarea-bordered w-full rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
                        >
                            Add Car to Listing
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCarFormPage;