import React from 'react';

const SelfService = () => {
    return (
        <div className='px-10 md:px-20 lg:px-40'>
            <div className='flex flex-col md:flex-row items-center justify-between md:mt-14 mt-5 mb-6 md:mb-14 gap-6'>
                {/* Employee Self-service Section */}
                <div className='text-center md:text-left'>
                    <h2 className="text-xl  md:text-2xl lg:text-4xl font-semibold mb-4">
                        Employee Self-service
                    </h2>
                    <p className="text-sm w-full max-w-sm md:text-base lg:text-lg">
                        Eliminate the middle-man and give your people the autonomy to view and maintain their own records. With Kurmato People, employees
                        can fill in their details, apply for leave, submit approvals, among other things.
                    </p>
                </div>

                {/* Set Objectives for Clarity Section */}
                <div className='text-center md:text-left'>
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">
                        Set objectives for clarity
                    </h2>
                    <p className="text-sm w-full max-w-sm md:text-base lg:text-lg">
                        Give your employees clarity by defining the objectives of their new role. You can tag goals based on designation,
                        department, or both. Our onboarding module ensures that your new hires are well-informed and well-equipped for their job requirements from day one.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SelfService;
