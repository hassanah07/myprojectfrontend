"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  LayoutDashboard,
  LogOutIcon,
  PlusCircle,
  Sidebar,
  View,
} from "lucide-react";
import { redirect } from "next/navigation";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    redirect("../../");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchAdmin = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/admin/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            "auth-token": token,
          },
        },
      );
      const res = await response.json();
      if (res.status === false) {
        localStorage.removeItem("token");
        redirect("../../");
      }
    };
    if (!token) {
      redirect("../../");
    } else {
      fetchAdmin();
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setSidebarOpen((s) => !s)}
        className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none absolute transition-all duration-150  ${
          sidebarOpen ? "left-56" : "left-14"
        }`}
        aria-label="Toggle sidebar"
      >
        {/* Menu icon */}
        <Sidebar className="text-2xl" />
      </button>
      <aside
        className={`bg-white min-h-screen dark:bg-slate-700 text-black dark:text-white border-r transition-all duration-150 shadow-2xl ${
          sidebarOpen ? "w-64" : "w-16"
        } min-h-[calc(100vh-64px)] rounded`}
      >
        {/* min-h-[calc(100vh-64px)] */}
        <nav className="p-4 space-y-4 text-black dark:text-white">
          <Link href="/loggedIn/dashboard" open={sidebarOpen} className="flex">
            <LayoutDashboard className="text-2xl mr-2 my-1" />{" "}
            {sidebarOpen ? "Dashboard" : ""}
          </Link>

          <Link href="/loggedIn/addWorker" open={sidebarOpen} className="flex">
            <PlusCircle className="text-2xl mr-2 my-1" />{" "}
            {sidebarOpen ? "Add Worker" : ""}
          </Link>
          <Link href="/loggedIn/viewWorker" open={sidebarOpen} className="flex">
            <View className="text-2xl mr-2 my-1" />{" "}
            {sidebarOpen ? "View Worker" : ""}
          </Link>
          <div
            open={sidebarOpen}
            className="flex cursor-pointer"
            onClick={logout}
          >
            <LogOutIcon className="text-2xl mr-2 my-1" />
            {sidebarOpen ? "Logout" : ""}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
