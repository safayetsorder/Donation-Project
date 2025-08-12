import React from "react";
import { Gift, MapPin } from "lucide-react";

export default function HowItWorksSection({ className = "" }) {
    const donationInstructions = `Browse our current needs list, select the items or funds you wish to contribute, and drop them at the nearest collection point. For those unable to travel, we offer scheduled doorstep pickups in select areas.`;
    const collectionPoints = [
        "Central Winter Aid Center",
        "North Hill Donation Hub",
        "Lakeside Relief Station",
        "Greenfield Community Hall",
    ];
    const supportedDivisions = [
        "Dhaka",
        "Chattogram",
        "Rajshahi",
        "Khulna",
        "Barishal",
        "Sylhet",
        "Rangpur",
        "Mymensingh",
    ];

    return (
        <section
            className={`bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 ${className}`}
            aria-labelledby="donation-process-heading"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-tr from-white via-indigo-50 to-indigo-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 border border-indigo-100 dark:border-gray-700 shadow-lg">
                    <h2
                        id="donation-process-heading"
                        className="text-3xl font-extrabold mb-6 flex items-center gap-3 text-indigo-800 dark:text-indigo-200"
                    >
                        <Gift className="w-8 h-8 text-indigo-500" /> Donation Process
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                        {donationInstructions}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-indigo-100/60 dark:bg-gray-700 p-6 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
                                <MapPin className="w-5 h-5 text-pink-500" /> Collection Points
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {collectionPoints.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-indigo-100/60 dark:bg-gray-700 p-6 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-4 text-indigo-900 dark:text-indigo-100">
                                Supported Divisions
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {supportedDivisions.map((division, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium"
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
