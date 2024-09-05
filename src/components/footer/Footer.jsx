import React from "react";
import img from '../../assets/KurmatoLogo.png';
import { FaInstagramSquare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#e7e0e0] py-6 w-full">
            <footer className="container mx-auto px-4">
                {/* Kurmato Logo and Icons */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <img className="h-10 mb-4 md:mb-0" src={img} alt="Kurmato Logo" />
                    <div className="text-slate-900 flex text-2xl gap-4 mb-4 md:mb-0">
                        <a href="https://www.instagram.com/kurmato_official" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare />
                        </a>
                        <a href="https://www.facebook.com/kurmato_official" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/kurmato_official" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/company/kurmato_official" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <Link to="/aboutus" className="block py-2 mt-4 bg-blue-950 text-white px-4 rounded hover:bg-blue-800">
                            About Us
                        </Link>
                    </div>
                </div>
                {/* Address */}
                <div className="text-slate-900 text-center md:text-left mt-4 md:mt-6">
                    <h2 className="text-sm md:text-base">B-79, B1C, Sector 63, Noida, Uttar Pradesh, India</h2>
                </div>
                {/* Copyright */}
                <div className="text-center mt-12">
                    <h1 className="text-slate-900 text-sm md:text-base">© 2024 Kurmato. All Rights Reserved.</h1>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
