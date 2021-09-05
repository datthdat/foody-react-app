import React, { useState } from 'react'
import Product from './Product/Product'
const Products = (props) => {
    const { products, addToCart, Page, onAdd, cartItems } = props
    return (
        <div className={Page ? "grid grid-cols-3 gap-4" : "grid grid-cols-4 gap-4"}>
            {
                products?.map((item, index) => {
                    return (
                        <Product cartItems={cartItems}
                            onAdd={onAdd} product={item} key={index} addToCart={addToCart} />
                    )
                })
            }

        </div>
    )
}

export default Products
