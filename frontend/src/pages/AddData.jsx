import React from "react";

const AddData = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Data</h1>
        {/* Form Input */}
        <form className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* NPWP */}
          <div className="flex flex-col">
            <label htmlFor="npwp" className="mb-1 font-medium">
              NPWP
            </label>
            <input
              type="text"
              id="npwp"
              placeholder="Enter NPWP"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-1 font-medium">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter Address"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
