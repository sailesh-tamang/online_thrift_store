import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import ShopNow from "./components/ShopNow"
import Cart from "./components/Cart"


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/shopnow" element={<ShopNow/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App