import React from "react";
import { MapPin, Gift } from "lucide-react";
import { NavLink } from "react-router";

export default function Header() {
    return (
        <div className="flex justify-between items-center px-4 py-2.5 bg-amber-100">
            <div>
                <h2 className="text-2xl font-bold">
                    Donation<span className="text-red-500">BD</span>
                </h2>
            </div>
            <div className="flex gap-6 justify-center items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-blue-500 hover:underline ${isActive ? "text-blue-600  underline" : ""}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/donation"
                    className={({ isActive }) =>
                        `hover:text-blue-500 hover:underline ${isActive ? "text-blue-600  underline" : ""}`
                    }
                >
                    Donation Campaigns
                </NavLink>
                <NavLink
                    to="/help"
                    className={({ isActive }) =>
                        `hover:text-blue-500 hover:underline ${isActive ? "text-blue-600  underline" : ""}`
                    }
                >
                    How to Help
                </NavLink>
            </div>
            <button className="px-6 py-1 rounded text-white bg-blue-500 hover:bg-blue-600">Login</button>
        </div>
    );
}
