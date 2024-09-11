import React, { useState } from 'react';

function AddEmployee() {
// const [data,setData]=useState()
const [name,setName]=useState("")
const [id,setId]=useState("")
const [phone,setPhone]=useState("")
// const [image,setImage]=useState("")
const [email,setEmail]=useState("")
const [joiningdate,setJoiningdate]=useState("")
const [skills,setSkills]=useState("")
const [desination,setDesination]=useState("")
const [loading ,setLoading]=useState("")




// const submitHandler=(event)=>{
//     event.preventDefault();
// }


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('https://kashishpal123.pythonanywhere.com/employees/employee/', {
//       method: 'POST',
//       body: JSON.stringify(),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const result = await response.json();
//     console.log(result);
//   }
const handleAddAddress = async () => {
    if (
      !name||
      !id ||
      !phone ||
    //   !image ||
      !email ||
      !joiningdate ||
      !skills ||
      !desination
    
    ) {
      alert("Error", "Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
    //   const token = await getDataFromEncriptedStorage(storageKeys.kTOKEN);
      const postData = {
        Employee_name:name,
        Employee_id: mobileNumber,
        phone_number: houseNumber,
        // Profile_image: image,
        email: email,
        Joining_date: joiningdate,

        Skills: skills,
        Designation:desination , // Replace with actual user ID if needed
      };

      // Log the data being sent
      console.log("Post Data:", postData);
      const response = await fetch('https://kashishpal123.pythonanywhere.com/employees/employee/', {
        method: "POST",
        headers: {
        //   Authorization: Bearer ${token},
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Employee_name:name,
            Employee_id: mobileNumber,
            phone_number: houseNumber,
            // Profile_image: image,
            email: email,
            Joining_date: joiningdate,
    
            Skills: skills,
            Designation:desination ,
           // Replace with actual user ID if needed
        }),
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", result.message);
        navigation.goBack(); // Navigate back to the address list or previous screen
      } else {
        Alert.alert("Error", result.message || "Failed to add address");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };



    return (
        <div className="bg-gray-100 p-6 max-w-2xl mx-auto mt-5 mb-5">
            <h1 className="text-center text-2xl font-semibold mb-6">Add Employee</h1>
            <form className="space-y-4"
            onSubmit={handleAddAddress}
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Name:
                    </label>
                    <input
                    name='Name'
                       onChange={setName}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Id:
                    </label>
                    <input
                    name='Id'
                    onChange={setId}
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Ph.no:
                    </label>
                    <input
                    name='Phone'
                    onChange={setPhone}
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Image:
                    </label>
                    <input
                    name='Image'
                    onChange={setImage}
                        type="image"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div> */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Email:
                    </label>
                    <input 
                    name='Email'
                    onChange={setEmail}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Joining Date:
                    </label>
                    <input
                    name='Joiningdate'
                    onChange={setJoiningdate}
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Skills:
                    </label>
                    <input
                    name='Skills'
                    onChange={setSkills}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                        Employee Designation:
                    </label>
                    <input
                    name='Designation'
                    onChange={setDesination}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className='flex justify-center'>

                    <button type='submit'
                        className='mt-2  h-10 w-24 rounded-xl bg-blue-800'>Submit</button>
                </div>
            </form>

        </div>
    );
}
export default AddEmployee;