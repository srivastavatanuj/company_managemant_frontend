import React from "react";
import img from '../../assets/KurmatoLogo.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-96">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 ">
                <footer className=" h-72 w-full mt-4">
                    {/* Kurmato Logo and Icons */}
                    <div className="flex justify-between">
                        <img className="h-10 mt-6 ml-10" src={img} alt="KurmatoLogo" />
                        <div className="flex text-2xl mt-6 mr-10 gap-4">
                            <FaInstagramSquare />
                            <FaFacebook />
                            <FaSquareXTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                    {/* Address */}
                    <div className="w-52 pt-10 ml-10 text-white">
                        <h2 className="text-base">B-79, B1C, sector 63 noida, Noida, Uttar Pradesh india</h2>
                    </div>
                    {/* Copyright */}
                    <div className="flex justify-center mt-24   ">
                        <h1>@ Copywrite 2024 | All Rights Reserved with Kurmato</h1>
                    </div>
                </footer>
            </div>
        </div>
    )
};
export default Footer;
