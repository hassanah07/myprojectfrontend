"use client";
import { useState } from "react";
import Footer from "../../../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/contact/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/Json",
        },
        body: JSON.stringify(formData),
      },
    );
    const res = await response.json();
    if (res.status === true) {
      setFormData({ name: "", email: "", message: "" });
      localStorage.setItem("time", Date.now());
    }
  };

  const getFilledCount = () => {
    let count = 0;
    if (formData.name.trim()) count += 3;
    if (formData.email.trim()) count += 3;
    if (formData.message.trim()) count += 3;
    return count;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-5xl md:text-7xl font-bold animate-slideDown mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-white">I&apos;d love to hear from you!</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-25 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          {/* Form */}
          <div className="bg-indigo-300/95 rounded shadow-2xl hover:shadow-2xl shadow-blue-500 hover:shadow-yellow-500 p-8 animate-fadeIn">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded text-red-600 font-semibold font-stretch-150% uppercase"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded text-red-600 font-semibold font-stretch-150% uppercase"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded text-red-600 font-semibold font-stretch-150% uppercase"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded hover:bg-indigo-700 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Animated Cartoon Character */}
          {/* Puzzle Game */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold mb-4 text-lg">
              Complete the puzzle by filling the form 🧩
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, index) => {
                const filled = index < getFilledCount();

                return (
                  <div
                    key={index}
                    className={`
            w-20 h-20 rounded-lg flex items-center justify-center
            text-2xl font-bold transition-all duration-500
            ${
              filled
                ? "bg-green-400 scale-100 shadow-lg"
                : "bg-gray-700 opacity-40 scale-90"
            }
          `}
                  >
                    {filled ? "✔" : "?"}
                  </div>
                );
              })}
            </div>

            {getFilledCount() === 9 && (
              <p className="mt-4 text-green-300 font-bold animate-bounce">
                🎉 Puzzle Solved! Ready to Send 🚀
              </p>
            )}
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div
            onClick={() =>
              (window.location.href = "mailto:hassanah0007@gmail.com")
            }
            className="bg-green-400 rounded shadow p-6 text-center cursor-pointer hover:shadow-2xl hover:shadow-yellow-500 transition transform hover:scale-105"
          >
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">hassanah0007@gmail.com</p>
          </div>
          <div
            onClick={() => (window.location.href = "tel:+919101462923")}
            className="bg-green-400 rounded shadow p-6 text-center cursor-pointer hover:shadow-2xl hover:shadow-yellow-500 transition transform hover:scale-105"
          >
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 9101462923</p>
          </div>
          <div className="bg-green-400 rounded shadow p-6 text-center hover:shadow-2xl hover:shadow-yellow-500 transition transform hover:scale-105">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-900">Location</h3>
            <p className="text-gray-600">Guwahati, Assam, India</p>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
