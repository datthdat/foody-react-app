import React from 'react'
import Products from '../Products/Products'
import { Button } from 'antd';
import Slider from '../Slider/Slider'
import Content from '../Content/Content'

const HomeScreen = (props) => {
    const { products, addToCart, loadMore, cartItems, onAdd, setLoadMore, loadMoreProduct } = props
    // const HideAndShow = () => (products.length > loadMore ? (
    //     <div className="flex justify-center">
    //         <Button
    //             onClick={() => setLoadMore(loadMore + 10)}
    //             className="rounded-lg py-2 px-4 border hover:bg-green-400 bg-white transition duration-200 ease-in-out"
    //             type="primary">
    //             Show More <i className="fas fa-angle-down" />
    //         </Button>

    //     </div>
    // ) : (
    //     <div className="flex justify-center">
    //         <Button
    //             onClick={() => setLoadMore(9)}
    //             className=" rounded-lg py-2 px-4 border hover:bg-green-400 bg-white-400  transition duration-200 ease-in-out"
    //             type="primary">
    //             Hide More <i className="fas fa-chevron-up" />
    //         </Button>
    //     </div>
    // ))

    return (
        <>
            <div>
                <Slider />
            </div>
            <div className="flex justify-center py-2">
                <p className="text-2xl font-sans font-bold text-green-400">
                    Popular <span className="text-red-600 ">Product</span>
                </p>
            </div>
            <div className="grid justify-center">
                <div className="flex justify-center">
                    <Products
                        loadMoreProduct={loadMoreProduct}
                        cartItems={cartItems}
                        onAdd={onAdd}
                        setLoadMore={setLoadMore} products={products} addToCart={addToCart} loadMore={loadMore} />
                </div>
                <Content />
            </div>
        </>
    )
}

export default HomeScreen
