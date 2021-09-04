import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'
import { Navbar, Footer, Cart, ProductDetail, HomeScreen, ProductsScreen } from './components'
import "antd/dist/antd.css";
import data from './data.json'
require('dotenv').config()
const App = () => {
  // const [data, setData] = useState('')
  // const [error, setError] = useState(null);
  // const [type, setType] = useState('chocolates')
  const [cart, setCart] = useState([])
  const [loadMore, setLoadMore] = useState(9)
  const dataProduct = data?.chocolates
  // useEffect(() => {
  //   axios(`http://localhost:3001/chocolates`)
  //     .then(res => {
  //       setData(res.data)
  //     })
  //     .catch(error => {
  //       setError(error)
  //       console.log("error", error);
  //     })
  // }, [])

  useEffect(() => {
    {
      cart.length > 0 ? (
        (document.title = `${cart.length} product`)
      ) : (
        (document.title = `Dami-Vie`)
      )
    }
  }, [cart])

  const addToCart = deCart => {
    setCart([...cart, deCart]);
    // localStorage.setItem('cart', JSON.stringify(cart));
  };
  // const dataCart = JSON.parse(localStorage.getItem('cart'));
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exits = cartItems.find(item => item.id === product.id);
    if (exits) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...exits, qty: exits.qty + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  console.log("cartItems", cartItems);

  return (
    <Router>
      <div>
        <Navbar cart={cartItems} />
        <Switch>
          <Route exact path='/' >
            <HomeScreen
              cartItems={cartItems}
              onAdd={onAdd}
              products={dataProduct}
              loadMore={loadMore}
              // addToCart={addToCart}
              setLoadMore={setLoadMore}
            />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cartItems} />
          </Route>
          <Route path='/all-products'>
            <ProductsScreen
              products={dataProduct}
              loadMore={loadMore}
              // // addToCart={addToCart}
              setLoadMore={setLoadMore}
            />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail
              // addToCart={addToCart}
              data={dataProduct}
            />
          </Route>
          <Footer />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}


export default App

// import React, { useContext } from 'react'
// import { MainContext } from './context/MainContext'
// const App = () => {
//   const { data, setData } = useContext(MainContext)
//   return (
//     <div className="flex justify-center">
//       Hello : {data}
//     </div>
//   )
// }

// export default App
