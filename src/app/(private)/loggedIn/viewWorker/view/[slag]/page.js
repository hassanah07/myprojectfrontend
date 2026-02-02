"use client";
import { useState, useRef, use } from "react";
import Image from "next/image";
import SideBar from "../../../../../../../components/Sidebar";
import { useRouter } from "next/navigation";

export default function WorkerViewPage({ params }) {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const signatureInputRef = useRef(null);
  const { slag } = use(params);
  const [workerData, setWorkerData] = useState({
    photo: null,
    name: "John Doe",
    fatherName: "Robert Doe",
    mobileNo: "+91 9876543210",
    address: "123 Main Street, City, State 12345",
    dob: "1990-05-15",
    appointmentDate: "2024-01-10",
    abhaid: "ABH-2024-001",
    aadhaarId: "1234-5678-9012",
    idMark: "A cut mark on hand",
  });

  const [loading, setLoading] = useState(false);

  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const maxSize = 500;

          if (width > height) {
            if (width > maxSize) {
              height = Math.round((height * maxSize) / width);
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width = Math.round((width * maxSize) / height);
              height = maxSize;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              setWorkerData((prev) => ({
                ...prev,
                photo: URL.createObjectURL(blob),
              }));
              setLoading(false);
            },
            "image/jpeg",
            0.8,
          );
        };
        img.src = event.target?.result;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error compressing image:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("first");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/worker/delete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ uuid: slag }),
      },
    );
    const res = await response.json();
    console.log(res);
    if (res.status === true) {
      router.back();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-100">
      <div className="flex relative">
        <SideBar />
        <div className="flex-1 p-6">
          <div className="max-w-2xl mx-auto bg-transparent rounded-lg shadow-2xl shadow-yellow-300 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h1 className="text-3xl font-bold">Worker Details</h1>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Photo Section */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                  {workerData.photo ? (
                    <Image
                      src={workerData.photo}
                      alt="Worker"
                      fill
                      className="rounded-full object-cover border-4 border-blue-600"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300">
                      <span className="text-gray-500 text-sm text-center">
                        No Photo
                      </span>
                    </div>
                  )}
                </div>
                <label className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    disabled={loading}
                  />
                  <button
                    onClick={(e) =>
                      e.currentTarget.parentElement
                        .querySelector("input")
                        .click()
                    }
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition font-semibold"
                  >
                    {loading ? "Uploading..." : "Upload Photo"}
                  </button>
                </label>
              </div>

              {/* Worker Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.name}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Father's Name
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.fatherName}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile No.
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.mobileNo}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.dob}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.address}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Appointment Date
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.appointmentDate}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ABHA ID
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.abhaid}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aadhaar ID
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.aadhaarId}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Identification Mark
                  </label>
                  <p className="text-lg text-gray-900 bg-indigo-400 p-3 rounded-lg">
                    {workerData.idMark}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition font-semibold">
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-8 py-3 bg-red-600 cursor-pointer text-white rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  Delete
                </button>
                <button
                  onClick={() => router.back()}
                  className="px-8 py-3 bg-gray-600 cursor-pointer text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
