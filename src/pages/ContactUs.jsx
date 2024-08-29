import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen 
        bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 
        flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
                {/* Form */}
                <form>
                    {/* label and Input for Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Your name"
                            required />
                    </div>
                    {/* label and Input for Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            type="email"
                            placeholder="Your email"
                            required />
                    </div>
                    {/* label and Input for Subject */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Subject"
                            required />
                    </div>
                    {/* Label and Text area for message */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            id="message"
                            rows="5"
                            placeholder="Your message"
                            required />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ContactUs;
