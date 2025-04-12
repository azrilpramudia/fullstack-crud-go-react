import React from "react";
import { Link } from "react-router-dom";

const ViewData = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 px-4 py-10">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">View Data</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">NPWP</th>
                <th className="border px-4 py-2">Address</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">12321i321409314</td>
                <td className="border px-4 py-2">Jakarta</td>
                <td className="border px-4 py-2 text-center">
                  <Link
                    to="/edit"
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition mr-2"
                  >
                    Edit
                  </Link>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Tambahkan baris lainnya di sini */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
