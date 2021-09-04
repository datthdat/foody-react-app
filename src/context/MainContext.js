// import { createContext, useEffect, useState } from "react";
// import axios from 'axios'

// export const MainContext = createContext();

// export const MainProvider = ({ children }) => {
//     const [data, setData] = useState('')
//     const [error, setError] = useState(null);
//     const [loadMore, setLoadMore] = useState(9)
//     const [cart, setCart] = useState([])

//     useEffect(() => {
//         axios(`http://localhost:3001/chocolates`)
//             .then(res => {
//                 setData(res.data)
//             })
//             .catch(error => {
//                 setError(error)
//                 console.log("error", error);
//             })
//     }, [])
//     return (
//         <MainContext.Provider value={{ data, setData, loadMore, setLoadMore, cart, setCart }} >
//             {children}
//         </MainContext.Provider>
//     )
// }