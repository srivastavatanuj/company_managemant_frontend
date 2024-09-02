import React from 'react'

const SelfService = () => {
    return (
        <div className='flex items-center justify-around my-10'>
            <div className=''>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">
                    Employee Self-service
                </h2>
                <p className="text-sm w-96 md:text-base lg:text-lg">
                    Eliminate the middle-man and give your people the autonomy to view and maintain their own records. With Kurmato People, employees
                    can fill in their details, apply for leave, submit approvals, among other things.
                </p>
            </div>

            <div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">

                    Set objectives for clarity
                </h2>
                <p className="text-sm  w-96 md:text-base lg:text-lg">
                    Give your employees clarity by defining the objectives of their new role. You can tag goals based on designation,
                    department, or both. Our onboarding module ensures that your new hires are well-informed and well-equipped for their job requirements from day one.
                </p>
            </div>
        </div>
    )
}

export default SelfService
