"use client";
import { useState, useMemo, useEffect } from "react";
import SideBar from "../../../../../components/Sidebar";
import Link from "next/link";
import { View } from "lucide-react";

export default function ViewWorkerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;

  // Filter workers based on search term
  const filteredWorkers = useMemo(() => {
    return data.filter(
      (worker) =>
        worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.father.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.appointment.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, data]);

  // Pagination
  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWorkers = filteredWorkers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  useEffect(() => {
    const workers = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/worker/get`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            "auth-token": localStorage.getItem("token"),
          },
        },
      );
      const res = await response.json();
      setData(res.data);
    };
    workers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-100">
      <div className="flex relative">
        <SideBar />
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Workers
              </h1>
              <p className="text-gray-600">Manage and view all workers</p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by name, email, or role..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Table */}
            <div className="bg-transparent rounded-lg shadow-2xl overflow-hidden overflow-x-auto md:p-10">
              <table className="w-full">
                <thead className="bg-transparent border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Father&apos;s Name
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Birth
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Apponted
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      #
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedWorkers.map((worker) => (
                    <tr
                      key={worker._id}
                      className="border-b border-gray-200 hover:bg-indigo-300"
                    >
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {worker.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {worker.father}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {worker.dob}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {worker.appointment}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded text-xs font-extrabold ${
                            worker.status === true
                              ? "bg-green-400 text-green-800"
                              : "bg-red-500 text-red-800"
                          }`}
                        >
                          {worker.status === true ? "Active" : "Draft"}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        <Link href={`viewWorker/view/${worker._id}`}>
                          <View />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {paginatedWorkers.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No workers found</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, filteredWorkers.length)} of{" "}
                {filteredWorkers.length} results
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? "bg-blue-500 text-white"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
