import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate(); 

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-slate-800 border-2 border-none p-4 rounded-lg">
                <h2 className="text-center text-white text-4xl mb-4">Login</h2>
                <div className="grid grid-cols-1 gap-2">
                    <label htmlFor="email" className="text-white">
                        Email:
                        <input
                            id="email"
                            className="bg-slate-100 p-2 w-full text-black"
                            type="email"
                            required
                        />
                    </label>
                    <label htmlFor="password" className="block text-white">
                        Password:
                        <input
                            id="password"
                            className="bg-slate-100 p-2 w-full text-black"
                            type="password"
                            required
                        />
                    </label>
                </div>
                <div className="flex justify-around">
                    <button
                        type="submit"
                        className="bg-white text-black p-2 my-6 w-1/3 rounded-lg hover:bg-slate-700 font-bold"
                        onClick={() => navigate('/Home')}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="bg-white text-black p-2 my-6 w-1/3 rounded-lg hover:bg-slate-700 font-bold"
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;

