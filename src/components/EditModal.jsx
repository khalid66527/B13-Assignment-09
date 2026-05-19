"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export function EditCarModal({ carDetails }) {
  const {
    _id, carName, price, carType, seatCapacity,
    imageUrl, location, availability, description
  } = carDetails || {};

  const handleSubmitform = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedCar = Object.fromEntries(formData.entries());

    console.log("Sending Data:", updatedCar);

    try {
      const res = await fetch(`http://localhost:5000/addCar/${_id}`, {
        method: 'PATCH',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedCar)
      });

      const data = await res.json();
      console.log("Update Success:", data);

      toast.success("Car Updated Successfully!");
    } catch (error) {
      console.error("Update Failed:", error);
    }
  };

  return (
    <Modal>
      <Button variant="secondary" className="text-green-600"><FaEdit /> Edit Car</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Edit Car Information</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  id="editCarForm"
                  onSubmit={handleSubmitform}
                  className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  {/* Car Name */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Car Name</Label>
                    <Input
                      name="carName"
                      defaultValue={carName}
                      placeholder="Toyota Corolla"
                      className="rounded-xl border-gray-300 text-white focus:border-green-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Daily Rent Price (৳)</Label>
                    <Input
                      name="price"
                      type="number"
                      defaultValue={price}
                      className="rounded-xl text-white border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Car Type */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Car Type</Label>
                    <select
                      name="carType"
                      defaultValue={carType || ""}
                      className="w-full border border-gray-300 rounded-xl text-white px-4 py-2.5 bg-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-blue-100 transition"
                    >
                      <option value="">Select Type</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>

                  {/* Seat Capacity */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Seat Capacity</Label>
                    <Input
                      name="seatCapacity"
                      type="number"
                      defaultValue={seatCapacity}
                      className="rounded-xl border-green-500 text-white focus:border-green-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Image URL */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Image URL</Label>
                    <Input
                      name="imageUrl"
                      defaultValue={imageUrl}
                      className="rounded-xl border-gray-300 text-white bg-gray-900 focus:border-green-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Pickup Location</Label>
                    <Input
                      name="location"
                      defaultValue={location}
                      className="rounded-xl text-white border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Availability */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold ">Availability</Label>
                    <select
                      name="availability"
                      defaultValue={availability || "Available"}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-white bg-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-blue-100 transition"
                    >
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold text-gray-700">Description</Label>
                    <textarea
                      name="description"
                      defaultValue={description}
                      rows={4}
                      className="w-full border bg-gray-900 text-white border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>

                
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button type="submit" form="editCarForm" className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300" slot="close">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}