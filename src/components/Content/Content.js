import React from 'react'
import { Button } from 'antd';
const Content = () => {
    return (
        <div className="mt-4">
            <div className="flex justify-center">
                <div className="w-1/2 flex">
                    <img src="https://cdn.shopify.com/s/files/1/0066/2342/8671/files/Vegan_Blondie_Mix_720x.jpg?v=1620326598" />
                </div>
                <div className="w-1/2 flex">
                    <div className="flex items-center px-20">
                        <div className="justify-center">
                            <div className="text-center">
                                <h2 className="font-serif text-3xl font-bold">
                                    VEGAN FAVORITES
                                </h2>
                                <p className="font-sans text-lg py-2">
                                    These five star rated vegan brownies and blondies, delivered in our classic gift box, are guaranteed to bring a smile to your face.
                                </p>
                                <div>
                                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Shop Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-1/2 flex">
                    <div className="flex items-center px-20">
                        <div className="flex justify-center">
                            <div className="text-center">
                                <h2 className="font-serif text-3xl font-bold">
                                    PARTY PACK FOR ANY OCCASION
                                </h2>
                                <p className="font-sans text-lg py-2">
                                    Every brownie is made with the finest ingredients by our Bakers on a Mission. We use Fair Trade cocoa and sugar and are kosher certified.
                                </p>
                                <div>
                                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex">
                    <img src="https://cdn.shopify.com/s/files/1/0066/2342/8671/files/brownies-laying-on-tray-square_720x.jpg?v=1593434162" />
                </div>
            </div>
        </div>
    )
}

export default Content
