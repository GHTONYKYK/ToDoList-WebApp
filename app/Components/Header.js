"use client";
import Link from "next/link";
import NavLink from "./NavLinks";
import { useState, useEffect } from "react";

const navLinks = [
  {
    title: "Log in",
    path: "/ComponentLogIn/page",
  },
  {
    title: "Log out",
    path: "/logout",
  },
  {
    title: "Sign up",
    path: "/signup",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-xl md:text-3xl text-white font-semibold"
        >
          TO-DO-LIST
        </Link>

        <div
          className={`menu ${
            navbarOpen ? "block" : "hidden"
          } md:block md:w-auto`}
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:bg-white hover:bg-opacity-20 rounded-md"
              >
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded"
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
