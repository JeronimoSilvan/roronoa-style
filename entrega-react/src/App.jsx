
import './App.css'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart'
import CartContextProvider from './Components/context/CartContext'
import Checkout from './Components/Checkout'

function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
