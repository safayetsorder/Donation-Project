import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">


                <div>
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +880 1234-567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>


                <div>
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-2">
                        <a href="https://www.facebook.com/" className="hover:text-blue-400">Facebook</a>
                        <br />
                        <a href="http://ww1.twiteer.com/" className="hover:text-blue-400">Twitter</a>
                        <br />
                        <a href="https://www.instagram.com/" className="hover:text-blue-400">Instagram</a>
                        <br />
                        <a href="https://www.linkedin.com/feed/" className="hover:text-blue-400">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2">© Copyright</h3>
                    <p>&copy; 2025 YourWebsiteName</p>
                    <p>All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
