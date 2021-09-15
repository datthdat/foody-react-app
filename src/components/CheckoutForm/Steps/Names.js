import { Button, Input } from 'antd'
import React from 'react'

const Names = ({ formData, setForm, navigation }) => {
    // console.log("formData, setForm, navigation", formData, setForm, navigation);
    const { firstName, lastName, age } = formData
    console.log("formData", navigation);
    return (
        <>
            <div className="flex justify-center py-5">
                <div className=" p-4 bg-gray-200 leading-loose">
                    <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Infomation</p>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">First Name</label>
                            <input
                                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name="firstName"
                                value={firstName}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="Your Email" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Last Name</label>
                            <input
                                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name="lastName"
                                value={lastName}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="Street" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Age</label>
                            <input
                                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name="age"
                                value={age}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="Street" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">Age</label>
                            <input
                                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                id="cus_email"
                                name="cus_email"
                                type="text"
                                required
                                placeholder="City" aria-label="Email" />
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Country" aria-label="Email" />
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Zip" aria-label="Email" />
                        </div>

                        <div className="mt-4">
                            <Button
                                onClick={() => navigation.next()}
                                type="primary"
                                block
                                type="submit">Next</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        // <div className="flex justify-center py-5">
        //     <div className=" p-4 bg-gray-200 leading-loose">
        //         <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
        //             <p className="text-gray-800 font-medium">Customer information</p>
        //             <div className>
        //                 <label className="block text-sm text-gray-600" htmlFor="cus_name">Name</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="Your Name" aria-label="Name" />
        //             </div>
        //             <div className="mt-2">
        //                 <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Your Email" aria-label="Email" />
        //             </div>
        //             <div className="mt-2">
        //                 <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Street" aria-label="Email" />
        //             </div>
        //             <div className="mt-2">
        //                 <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="City" aria-label="Email" />
        //             </div>
        //             <div className="inline-block mt-2 w-1/2 pr-1">
        //                 <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Country" aria-label="Email" />
        //             </div>
        //             <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
        //                 <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required placeholder="Zip" aria-label="Email" />
        //             </div>
        //             <p className="mt-4 text-gray-800 font-medium">Payment information</p>
        //             <div className>
        //                 <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
        //                 <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required placeholder="Card Number MM/YY CVC" aria-label="Name" />
        //             </div>
        //             <div className="mt-4">
        //                 <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
        //             </div>
        //         </form>
        //     </div>
        //     <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        // </div>


    )
}

export default Names
