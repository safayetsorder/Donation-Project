import { HeartHandshake } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const DonationPage = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('/data.json').then(data => data.json()).then(data => {
            setDonations(data);
        })
    }, []);



    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Page Heading */}
            <div className="flex items-center gap-3 mb-8">
                <HeartHandshake className="w-8 h-8 text-pink-600" />
                <h1 className="text-3xl font-bold text-gray-800">Make a Difference</h1>
            </div>

            {/* Grid of Donations */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {donations.map((donation) => (
                    <div
                        key={donation.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 flex flex-col"
                    >
                        {/* Image */}
                        <img
                            src={donation.image}
                            alt={donation.title}
                            className="h-48 w-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {donation.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {donation.description}
                            </p>
                            <span className="inline-block text-xs font-medium text-pink-700 bg-pink-100 rounded-full px-3 py-1 self-start">
                                {donation.division}
                            </span>

                            {/* Donate Button */}
                            <div className="mt-auto pt-4">
                                <Link
                                    to={`/donation/${donation.id}`}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors w-full"
                                >
                                    <HeartHandshake className="w-4 h-4" />
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationPage;