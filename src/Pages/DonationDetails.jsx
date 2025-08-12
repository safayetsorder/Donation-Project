import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const DonationDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/data.json').then(data => data.json()).then(data => {
            setDonations(data);
            setLoading(false)
        })


    }, []);


    const detailsData = donations.find((donation) => {
        return donation.id === Number(id)

    })
    console.log(loading);
    if (loading) {
        return (
            <div className='min-h-[80vh]'>
                <p>Loading....</p>
            </div>
        )
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full">
                {/* Image */}
                <img
                    src={detailsData.image}
                    alt={detailsData.title}
                    className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{detailsData.title}</h2>
                    <p className="text-gray-600">{detailsData.description}</p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold text-gray-700">Status:</p>
                            <p
                                className={`mt-1 inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${detailsData.status === 'active'
                                    ? 'bg-green-500'
                                    : 'bg-gray-400'
                                    }`}
                            >
                                {detailsData.status}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-700">Division:</p>
                            <p className="mt-1">{detailsData.division}</p>
                        </div>

                        <div className="md:col-span-2">
                            <p className="font-semibold text-gray-700">Contact Info:</p>
                            <p className="mt-1 text-gray-600">{detailsData.contactInfo}</p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;