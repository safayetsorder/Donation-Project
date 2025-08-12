// HowItWorksSection.jsx
// React component (JSX) — How It Works section with instructions, collection points, and supported divisions using Tailwind CSS

import React from "react";
import { MapPin, Gift } from "lucide-react";

export default function HowItWorksSection({ className = "" }) {
    const donationInstructions = `Choose the items or amount you want to donate, package them securely, and bring them to the nearest collection point. You can also contact us for pick-up options in supported areas.`;
    const collectionPoints = [
        "Downtown Community Center",
        "Eastside Donation Hub",
        "West Park Relief Office",
        "Northside Help Center"
    ];
    const supportedDivisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];

    return (
        <section className={`bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-16 ${className}`} aria-labelledby="how-it-works-heading">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                    <h2 id="how-it-works-heading" className="text-3xl font-extrabold mb-6 flex items-center gap-2">
                        <Gift className="w-7 h-7 text-pink-500" /> How It Works
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{donationInstructions}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Collection Points */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-red-500" /> Collection Points
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {collectionPoints.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Supported Divisions */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Supported Divisions</h3>
                            <div className="flex flex-wrap gap-2">
                                {supportedDivisions.map((division, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                                    >
                                        {division}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
