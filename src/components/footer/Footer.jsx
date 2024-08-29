import React from "react";
import img from '../../assets/KurmatoLogo.png';
import { FaInstagramSquare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 py-6   bottom-0 w-full">
            {/* bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 */}
            <footer className="container mx-auto px-4">
                {/* Kurmato Logo and Icons */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <img className="h-10 mb-4 md:mb-0" src={img} alt="KurmatoLogo" />
                    <div className=" text-white flex text-2xl gap-4 mb-4 md:mb-0">
                    <FaInstagramSquare />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    </div>
                </div>
                {/* Address */}
                <div className="text-white text-center md:text-left mt-4 md:mt-6">
                    <h2 className="text-sm md:text-base">B-79, B1C, Sector 63, Noida, Uttar Pradesh, India</h2>
                </div>
                {/* Copyright */}
                <div className="text-center mt-12">
                    <h1 className="text-sm md:text-base">© 2024 Kurmato. All Rights Reserved.</h1>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
