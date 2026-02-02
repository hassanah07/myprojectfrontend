"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  LogIn,
  QrCode,
  Blinds,
  PackageCheck,
  LayoutList,
  LoaderPinwheel,
} from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "home", icon: Blinds, link: "/" },
    { name: "projects", icon: PackageCheck, link: "/project" },
    { name: "skills", icon: LayoutList, link: "/skills" },
    { name: "about", icon: QrCode, link: "/about" },
    { name: "login", icon: LogIn, link: "/login" },
  ];
  return (
    <>
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            <span className="flex">
              <LoaderPinwheel className="w-9 h-9 text-indigo-500 mx-2" />
              hassan.dev
            </span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-8 absolute md:static top-16 left-0 right-0 bg-slate-950/95 md:bg-transparent p-4 md:p-0`}
          >
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="hover:text-purple-400 transition block capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogoCart Logo={item.icon} Name={item.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

const LogoCart = ({ Logo, Name }) => {
  return (
    <span className="flex items-center gap-1">
      <Logo className="w-4 h-4" />
      {Name}
    </span>
  );
};
