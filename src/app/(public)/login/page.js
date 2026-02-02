"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Footer from "../../../../components/Footer";
import { redirect, useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);
    // login logic here
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const res = await response.json();
    console.log(res);
    if (res.status === true) {
      setLoading(false);
      localStorage.setItem("token", res.authtoken);
      router.push("/loggedIn/dashboard");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      redirect("/loggedIn/dashboard");
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-green-600 via-blue-900 to-yellow-800 text-white overflow-hidden relative ">
        <div className="flex items-center justify-center p-14">
          <div className="w-full max-w-md  mt-14">
            <div className="bg-transparent rounded shadow-2xl shadow-blue-400 p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-100">Sign in to your account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-gray-100">
                    <input type="checkbox" className="mr-2 w-4 h-4" />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 font-medium"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded font-semibold hover:shadow-2xl hover:shadow-indigo-500 transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-3 text-gray-200 text-sm">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Buttons */}
              <div className="space-y-3">
                <button className="w-full border border-gray-300 text-gray-400 py-2 rounded hover:bg-yellow-400 hover:shadow-2xl hover:shadow-yellow-500 transition">
                  Sign in with Google
                </button>
                <button className="w-full border border-gray-300 text-gray-400 py-2 rounded hover:bg-yellow-400 hover:shadow-2xl hover:shadow-yellow-500 transition">
                  Sign in with GitHub
                </button>
              </div>

              {/* Footer */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
