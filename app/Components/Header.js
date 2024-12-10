"use client";
import Link from "next/link";
import NavLink from "./NavLinks";
import { useState } from "react";
 

const navLinks = [
    {
        title: "Log in",
        path: "/ComponentLogIn/page"
    },
    {
        title: "Log out",
        path: "/logout"
    },
    {
        title: "Sign up",
        path: "/signup"
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-xl md:text-3xl text-white font-semibold"
                >
                    Welcome to Aaron's TodoList 
                </Link>
           
                <div className={`menu ${navbarOpen ? "block" : "hidden"} md:block md:w-auto`} id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
