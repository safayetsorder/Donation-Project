import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2.5 bg-amber-100 '>
            <div>
                <h2 className='text-2xl font-bold'>Donation<span className='text-red-500'>BD</span></h2>
            </div>
            <div className=' flex gap-6 hover:text-blue-400 hover:font-bold justify-center items-center'>

                <Link to='/'>Home</Link>
                <Link to='/donation'>Donation Campaigns</Link>
                <Link to='/help'>How to Help</Link>
                <Link to='/dashbord'>Dashboard</Link>

            </div>
            <button className='px-6 py-1 rounded text-white bg-blue-500 hover:bg-blue-600'>
                Login
            </button>
        </div>
    );
};

export default Header;