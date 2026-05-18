import { Button, Modal, Surface } from "@heroui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";

export default function ContactModal() {
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const carData = Object.fromEntries(formData.entries());
    console.log("Car Data Updated:", carData);
    
  };

  return (
    <Modal>
      <div className="mb-2">
        <Button variant="outline" className="flex items-center gap-2">
          <BiEdit /> Edit Now
        </Button>
      </div>
          
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="md:max-w-lg">
            <Modal.CloseTrigger />
            
            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold">Edit Car Details</Modal.Heading>
            </Modal.Header>
            

            <div className="p-6">
              <form
            //    onSubmit={handleSubmitForm}
                className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <Surface variant="default" className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
                  
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
                  
                </Surface>

                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
                  >
                    Save Details
                  </button>
                </div>

              </form>
            </div> 

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}