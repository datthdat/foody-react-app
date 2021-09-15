import { Button } from 'antd'
import React from 'react'

const Address = ({ formData, setForm, navigation }) => {
    const { street, city, country, zipCode } = formData
    console.log("formData", formData);
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className=" p-4 bg-gray-200 leading-loose">
                    <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Address</p>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Street</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"street"}
                                value={street}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="Street"
                                aria-label="Email"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"city"}
                                value={city}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="City"
                                aria-label="Email"
                            />
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"country"}
                                value={country}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="Country"
                                aria-label="Email"
                            />
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"zipCode"}
                                value={zipCode}
                                onChange={setForm}
                                type="number"
                                required
                                placeholder="Zip"
                                aria-label="Email"
                            />
                        </div>
                        <div className="mt-4 flex justify-between space-x-10">
                            <Button
                                block
                                type="primary"
                                onClick={() => navigation.previous()}
                            >
                                Previous
                            </Button>
                            <Button
                                block
                                type="default"
                                onClick={() => navigation.next()}
                            >
                                Next
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Address
