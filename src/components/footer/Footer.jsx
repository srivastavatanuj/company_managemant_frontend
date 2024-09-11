import React from "react";
import img from '../../assets/KurmatoLogo.png';

import Icons from "../FooterCmponent/Icons";
import Copyright from "../FooterCmponent/Copyright";
import FooterText from "../FooterCmponent/FooterText";

const Footer = () => {
    return (
        <div className="bg-zinc-100 py-6 w-full">
            <footer className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <img className="h-10 mb-4 md:mb-0" src={img} alt="Kurmato Logo" />
                    <Icons />
                </div>
                <FooterText />
                <div className="mt-8 ">
                    <Copyright />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
