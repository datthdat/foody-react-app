import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
// import Rating from '../../Rate/Rating'
const Product = (props) => {
    const { product, onAdd } = props
    const [imageProduct, setImageProduct] = useState('')
    const rate = {
        size: 20,
        isHalf: true,
        value: product.rate,
    };
    return (
        <div className="bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform duration-500 mx-auto md:mx-0 py-4 px-4">
            <Link
                to={`/products/${product.id}`}
                className="w-64 relative"
            >
                <img className="object-cover rounded-t-md z-10"
                    src={imageProduct ? imageProduct : product.img}
                    alt={product.name}
                />
            </Link>
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-gray-700">
                    {product.name}
                    <ReactStars {...rate} />
                </h1>
                <p className="text-sm mt-2 text-gray-700">
                    {product.dsc}
                </p>
                <div className="mt-3 space-x-4 flex p-1">
                    {
                        product?.images?.map((list, index) => {
                            return (
                                <div key={index} className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                                    <span className="block h-6 w-6 bg-green-400 rounded-full">
                                        <img className="rounded-full flex items-center justify-center "
                                            src={list.src} alt=""
                                            onMouseOver={() => setImageProduct(list.src)}
                                        />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                    <button className="block text-xl font-semibold text-yellow-500 cursor-auto">
                        ₫{product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </button>

                    <Link
                        to={`/products/${product.id}`}
                        // onClick={() => onAdd(product)}
                        className="text-lg block font-semibold py-2 px-6 text-white hover:text-green-100 bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
                        <i className="fas fa-eye"></i>
                    </Link>
                </div>

            </div>
        </div >
    )
}
export default Product
