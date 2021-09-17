import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ cart }) => {
    return (
        <>
            <div>
                <div className="text-center">
                    <p className="text-white bg-green-500 py-1">Please enjoy brownies within 14 days after receiving them.</p>
                </div>
                <nav className="bg-black border-b py-5 sticky -mt-4 z-40">
                    <div className="max-w-7xl mx-auto px-2 lg:px-8">
                        <div class="flex justify-between ...">
                            <div className="flex-shrink-0 flex items-center justify-start">
                                <img className="lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <div className="sm:block sm:ml-6 justify-center">
                                <div className="flex space-x-4">
                                    <Link to="/" href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"
                                    >Home <i className="fas fa-home"></i>
                                    </Link>
                                    <Link to="/all-products"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >Product <i className="fab fa-product-hunt"></i>
                                    </Link>
                                    <Link href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >About Us <i className="fas fa-eject"></i>
                                    </Link>
                                    <Link href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >Location <i className="fas fa-map-marker-alt"></i>
                                    </Link>
                                </div>
                            </div>
                            <Link to="/cart" >
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex justify-end">
                                    <div className="ml-3 relative">
                                        <button component to='/cart' type="button" className="flex text-sm rounded-full " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                                                {cart.length}
                                            </div>


                                            <i className="fas fa-shopping-cart text-xl rounded-full text-white p-1" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* <div className="flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center justify-start">
                                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6 justify-center">
                                <div className="flex space-x-4">
                                    <Link to="/" href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"
                                    >Dami-Shop</Link>
                                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</Link>
                                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Location</Link>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex justify-end">
                                <div className="ml-3 relative">
                                    <button component to='/cart' type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                                            {cart.length}
                                        </div>
                                        <Link to="/cart" >
                                            <i className="fas fa-shopping-cart text-xl rounded-full text-white p-1" />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div> */}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
