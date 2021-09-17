import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Button, Modal } from 'antd';

const Footer = () => {
    // const containerStyle = {
    //     height: '400px'
    // };
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        alert("Thanks for question")
        console.log(user + email + message)
        setMessage("ok")

        // if (user === '' || email === '' || message === '') {
        //     alert("Form is empty")
        // } else {
        //     alert("Thanks for message")
        // }
    }
    const warning = () => {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...'
        });
    }
    const API_KEY = process.env.REACT_APP_KEY

    return (
        <footer className="footer bg-green-500 relative pt-1 border-b-2 border-blue-700 px-20">
            <div className="container mx-auto px-6 py-2">
                <div className="sm:flex ">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/3 p-5 border-r border-black-800 ">
                            <div className="my-6 ml-3 text-xl font-semibold md:text-center">ABOUT US</div>
                            <div className="md:text-left">
                                <p className="p-3 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.</p>
                                <p className="p-3 text-black">Morbi tristique massa nec massa auctor, at scelerisque felis consectetur. Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-5 border-r border-black-800 md:text-center">
                            <div className="my-6 ml-3 text-xl font-semibold">CONTACT US</div>
                            <div className="md:text-center">
                                <p className="mt-8 text-black">
                                    23 Lương Thúc Kỳ, Hoà Hải, Ngũ Hành Sơn,  <br />
                                    Đà Nẵng 550000 <br />
                                    Vietnam <br />
                                    <strong>Phone:</strong> +1 5589 55488 55 <br />
                                    <strong>Email:</strong> paracel@gmail.com
                                </p>
                                <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 transform rotate-45">
                                    <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-facebook-f fa-lg text-white transform -rotate-45"></i>
                                    </div>
                                    <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-twitter fa-lg text-white transform -rotate-45"></i>
                                    </div>
                                    <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-google-plus-g fa-lg text-white transform -rotate-45"></i>
                                    </div>
                                    <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-linkedin-in fa-lg text-white transform -rotate-45"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-5 ">
                            <div className="my-6 ml-3 text-xl font-semibold md:text-center">SAY HELLO</div>
                            {/* onFinish={(values) => console.log(values)} */}
                            <div className="md:text-center">
                                <form name="nest-messages" className="space-y-2 ml-3" onSubmit={submitHandler} >
                                    <div name="username">
                                        <input
                                            className="w-full border py-2 rounded p-3"
                                            placeholder="User Name"
                                            onChange={(e) => setUser(e.target.value)}
                                        />
                                    </div>
                                    <div name="email" >
                                        <input
                                            type="email"
                                            className="w-full border py-2 rounded p-3"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div name="message">
                                        <textarea
                                            className="w-full border py-2 rounded p-3"
                                            placeholder="Message..."
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                    <div >

                                        {
                                            user === '' || email === '' || message === '' ? (
                                                <Button
                                                    style={{
                                                        background: '#ffd43b',
                                                        border: 'none'
                                                    }}
                                                    onClick={warning}
                                                    block
                                                    icon={<i className="fas fa-pen" />}
                                                />
                                            ) : (
                                                <Button
                                                    htmlType="submit"
                                                    style={{
                                                        background: '#ffd43b',
                                                        border: 'none'
                                                    }}
                                                    block
                                                    icon={<i className="fas fa-paper-plane" />}
                                                />
                                            )
                                        }
                                    </div>
                                </form>
                                {/* <Form name="nest-messages" onFinish={(values) => console.log(values)} className="space-y-2 ml-3" >
                                    <Form.Item name="username">
                                        <Input className="w-full border py-2 rounded p-3" placeholder="User Name" />
                                    </Form.Item>
                                    <Form.Item name="email" >
                                        <Input className="w-full border py-2 rounded p-3" placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item name="message">
                                        <Input.TextArea className="w-full border py-2 rounded p-3" placeholder="Message..." />
                                    </Form.Item>
                                    <Form.Item >
                                        <Button
                                            className="w-full bg-yellow-400 py-1 rounded"
                                            htmlType="submit"
                                            type="primary"
                                            icon={<i className="fas fa-paper-plane" />}
                                        />
                                    </Form.Item>
                                </Form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 pt-4">
                <div className="py-2 px-2 border rounded">
                    <LoadScript
                        id="script-loader"
                        googleMapsApiKey={API_KEY}
                    >
                        <GoogleMap
                            mapContainerStyle={{
                                height: 400,
                            }}
                            zoom={13}
                            center={{ lat: 16.0472484, lng: 108.1716863 }}
                        >
                            <Marker position={{ lat: 16.0472484, lng: 108.1716863 }} />
                        </GoogleMap>
                    </LoadScript >
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="border-t-2 border-gray-300 flex flex-col items-center ">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-black font-bold mb-2">
                            © 2020 by Paracel Project Education
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

