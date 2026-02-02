"use client";
import { useState } from "react";
import SideBar from "../../../../../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddWorkerPage() {
  const [formData, setFormData] = useState({
    teaName: "",
    name: "",
    dob: "",
    sex: "",
    father: "",
    address: "",
    idMark: "",
    appointment: "",
    mobile: "",
    aadhaar: "",
    abhaId: "",
  });

  const toastOptions = {
    theme: "colored",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);
    // Add worker API call here
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/worker/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      },
    );
    const res = await response.json();
    console.log(res);
    if (res.status === true) {
      toast.info(res.msg, toastOptions);
      setTimeout(() => {
        setFormData({
          teaName: "",
          name: "",
          dob: "",
          sex: "",
          father: "",
          address: "",
          idMark: "",
          appointment: "",
          mobile: "",
          aadhaar: "",
          abhaId: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-100">
      <ToastContainer />
      <div className="flex relative">
        <SideBar />
        <div className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Add New Worker
              </h1>
            </div>

            {/* Form Card */}
            <div className="bg-transparent rounded-lg shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tea State Name
                    </label>
                    <input
                      type="text"
                      name="teaName"
                      value={formData.teaName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Tea Estate"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="John Abraham"
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      dob
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      sex
                    </label>
                    <input
                      type="text"
                      name="sex"
                      value={formData.sex}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Male/Female"
                    />
                  </div>
                </div>

                {/* Job Details Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Father Name
                    </label>
                    <input
                      type="text"
                      name="father"
                      value={formData.father}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Father Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Full Address"
                    />
                  </div>
                  {/* <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select Department</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                </select>
              </div> */}
                </div>

                {/* Salary and Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Identification Mark
                    </label>
                    <input
                      type="text"
                      name="idMark"
                      value={formData.idMark}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="Identification Mark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      name="appointment"
                      value={formData.appointment}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
                {/* others */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobile: e.target.value.slice(0, 10),
                        })
                      }
                      onKeyDown={(e) => {
                        if (
                          e.key === "ArrowUp" ||
                          e.key === "ArrowDown" ||
                          e.key === "e" ||
                          e.key === "E"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="9957123456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      AADHAAR
                    </label>
                    <input
                      type="text"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, ""); // digits only

                        if (value.length > 12) value = value.slice(0, 12);

                        const parts = [];
                        if (value.length > 0) parts.push(value.slice(0, 4));
                        if (value.length > 4) parts.push(value.slice(4, 8));
                        if (value.length > 8) parts.push(value.slice(8, 12));

                        setFormData((prev) => ({
                          ...prev,
                          aadhaar: parts.join("-"),
                        }));
                      }}
                      maxLength={14}
                      placeholder="1234-5678-9874"
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Abha Id Number
                    </label>
                    <input
                      type="text"
                      name="abhaId"
                      value={formData.abhaId}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, ""); // digits only

                        if (value.length > 14) value = value.slice(0, 14);

                        const parts = [];
                        if (value.length > 0) parts.push(value.slice(0, 2));
                        if (value.length > 2) parts.push(value.slice(2, 6));
                        if (value.length > 6) parts.push(value.slice(6, 10));
                        if (value.length > 10) parts.push(value.slice(10, 14));

                        handleChange({
                          target: {
                            name: "abhaId",
                            value: parts.join("-"),
                          },
                        });
                      }}
                      placeholder="91-1234-5678-9874"
                      maxLength={17}
                      className="w-full px-4 py-2 border border-gray-300 text-yellow-300 font-semibold rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="91-1234-5678-9874"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                  >
                    Add Worker
                  </button>
                  <button
                    type="reset"
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition duration-200"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
