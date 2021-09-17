import { Button } from 'antd'
import React from 'react'
import { useForm } from 'react-hooks-helper'
import { Input } from 'antd';
import { Helmet } from 'react-helmet';
const Contact = ({ formData, setForm, navigation }) => {
    const { TextArea } = Input;
    const { email, phone, subject, message } = formData
    return (
        <div>
            <Helmet>
                <title>
                    Contact
                </title>
            </Helmet>
            <div className="flex justify-center py-5 ">
                <div className=" p-4 bg-gray-200 leading-loose">
                    <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Contact</p>

                        <div className="mt-2 ">
                            <label className=" block text-sm text-gray-600" >email</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"email"}
                                value={email}
                                onChange={setForm}
                                type="email"
                                required
                                placeholder="Email"
                            />
                        </div>


                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" >subject</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"subject"}
                                value={subject}
                                onChange={setForm}
                                type="text"
                                required
                                placeholder="Subject"
                            />
                        </div>

                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" >Phone Number</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                name={"phone"}
                                value={phone}
                                onChange={setForm}
                                type="number"
                                required
                                placeholder="Phone"
                            />
                        </div>

                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" >Message </label>
                            <TextArea value={message} name="message" onChange={setForm} placeholder="Your Message ..." className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" rows={4} />
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
        </div>
    )
}

export default Contact
