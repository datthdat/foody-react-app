import { Button } from 'antd'
import React, { useState } from 'react'
import Product from './Product/Product'
const Products = (props) => {
    const { products, addToCart, onAdd, cartItems, loadMore, loadMoreProduct, PageProduct } = props
    const [isShow, setIsShow] = useState(true)
    const toggleButton = () => {
        setIsShow(!isShow)
    }
    return (
        <div className="py-3">
            {PageProduct ? (
                <div className={"grid grid-cols-3 gap-4"}>
                    {
                        products?.map((item, index) => {
                            return (
                                <Product
                                    loadMore={loadMore} cartItems={cartItems}
                                    onAdd={onAdd} product={item} key={index}
                                    addToCart={addToCart} />
                            )
                        })
                    }
                </div>
            ) : (
                <div className={"grid grid-cols-4 gap-4"}>
                    {
                        products?.slice(0, loadMore).map((item, index) => {
                            return (
                                <Product
                                    loadMore={loadMore} cartItems={cartItems}
                                    onAdd={onAdd} product={item} key={index}
                                    addToCart={addToCart} />
                            )
                        })
                    }
                </div>
            )
            }

            {/* {
                products.length > 20 ? null : (
                    <div className="my-3 flex justify-center ">
                        <Button
                            onClick={loadMoreProduct}
                            size="large"
                            type="primary"
                            icon={
                                <i className="fas fa-chevron-circle-down" />
                            }
                        />
                    </div>
                )
            } */}
            {PageProduct === "/all-products" ? null : (
                <>
                    {
                        isShow === true ? (
                            <div className="my-3 flex justify-center ">
                                <Button
                                    onClick={() => {
                                        loadMoreProduct();
                                        toggleButton()
                                    }}
                                    size="large"
                                    type="primary"
                                    icon={
                                        <i className="fas fa-chevron-circle-down" />
                                    }
                                />
                            </div>
                        ) : null
                    }
                </>
            )
            }
        </div >
    )
}

export default Products
