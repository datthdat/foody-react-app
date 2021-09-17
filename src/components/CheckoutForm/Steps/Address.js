import { Button } from 'antd'
import React from 'react'

const Address = ({ formData, setForm, navigation }) => {
    const { country, city, address, zip } = formData
    console.log("formData", formData);
    return (
        <>
            <div className="flex justify-center py-5">
                <div className=" p-4 bg-gray-200 leading-loose">
                    <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Address</p>

                        <div className="mt-2 ">
                            <label className=" block text-sm text-gray-600" >Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"country"}
                                value={country}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="country"
                            />
                        </div>


                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" >City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"city"}
                                value={city}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="City"
                            />
                        </div>

                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" >Address </label>
                            <div className="inline-block mt-2 pr-1">
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                    name={"address"}
                                    value={address}
                                    onChange={setForm}
                                    type="text"
                                    required
                                    placeholder="Address"
                                />
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1">
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                    name={"zip"}
                                    value={zip}
                                    onChange={setForm}
                                    type="number"
                                    required
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>


                        <div className="mt-4 flex justify-between space-x-10">
                            <Button
                                block
                                type="default"
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
        </>
    )
}

export default Address
