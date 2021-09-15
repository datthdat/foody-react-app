import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'
import { Navbar, Footer, Cart, ProductDetail, HomeScreen, ProductsScreen, SearchVoice, MultiStepForm } from './components'
import "antd/dist/antd.css";
import data from './data.json'
const App = () => {
  // const [data, setData] = useState('')
  // const [error, setError] = useState(null);
  // const [type, setType] = useState('chocolates')
  const [allData, setAllData] = useState(data)
  const [cart, setCart] = useState([])
  const [loadMore, setLoadMore] = useState(12)
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

  const loadMoreProduct = () => {
    setLoadMore(allData.length)
  }



  // useEffect(() => {
  //   alert("title")
  // }, [cart])

  // const addToCart = deCart => {
  // setCart([...cart, deCart]);
  // localStorage.setItem('cart', JSON.stringify(cart));
  // };
  // const dataCart = JSON.parse(localStorage.getItem('cart'));

  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exits = cartItems.find((item) => item.id === product.id);
    if (exits) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...exits, qty: exits.qty + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  // console.log("onAdd", cartItems);

  const onRemove = (product) => {
    const exits = cartItems.find((item) => item.id === product.id);
    if (exits.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(cartItems.map(item => (item).id === product.id ? { ...exits, qty: exits.qty - 1 } : item))
    }
    // console.log("exits.qty", exits.qty);
  }
  // console.log("onRemove", cartItems);

  // const cartPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const ListCodeCoupon = ['thanhdat', 'huylam', 'hoanghung', 'duyennguyen', 'vongocthanhdat123'];
  const total = 0;
  const totalPrice = (a, c) => {
    return a + c.price * c.qty
  }
  const TotalPrice = cartItems.reduce(totalPrice, total)
  console.log("TotalPrice", TotalPrice)


  useEffect(() => {
    {
      cartItems.length > 0 ? (
        (document.title = `${cartItems.length} product`)
      ) : (
        (document.title = `Dami-Vie`)
      )
    }
  }, [cartItems])


  return (
    <Router>
      <div>
        <Navbar cart={cartItems} />
        <Switch>
          <Route exact path='/' >
            <HomeScreen
              loadMoreProduct={loadMoreProduct}
              cartItems={cartItems}
              onAdd={onAdd}
              products={dataProduct}
              loadMore={loadMore}
              setLoadMore={setLoadMore}
            />
          </Route>
          <Route exact path='/cart'>
            <Cart
              ListCodeCoupon={ListCodeCoupon}
              TotalPrice={TotalPrice}
              onRemove={onRemove}
              onAdd={onAdd}
              cart={cartItems} />
          </Route>
          <Route path='/all-products'>
            <ProductsScreen
              onAdd={onAdd}
              products={dataProduct}
              loadMore={loadMore}
              // // addToCart={addToCart}
              setLoadMore={setLoadMore}
            />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail
              // addToCart={addToCart}
              onAdd={onAdd}
              data={dataProduct}
            />
          </Route>
          <Route path="/check-out">
            <MultiStepForm />
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
