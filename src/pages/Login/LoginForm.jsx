import React from 'react';
import img from '../../assets/KurmatoLogo.png';
import img1 from '../../assets/loginPageBgImage.png'

const LoginForm = () => {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            {/* Left Section */}
            <div 
                className="bg-cover bg-center flex items-center justify-center p-8"
                style={{backgroundImage: `url(${img1})`}}
            >
                <div className="text-center  text-white space-y-6  p-6 rounded-lg ">
                    <p className="text-xl">
                        " Our employees all work from home, they are able to check-in/check out instead of a time-card. We can just pull reports and payday is much easier. "
                    </p>
                </div>
            </div>
            
            {/* Right Section */}
            <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                 
                    <div className="text-center mb-6">
                        <img src={img} alt="Kurmato Logo" className="mx-auto w-52 mb-4" />
                        <h2 className="text-2xl font-semibold">Start Your 30-day Free Trial</h2>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" defaultValue="+91" className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">LogIn</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;