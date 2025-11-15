import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
// import Collection from './pages/collection'
// import Contact from './pages/Contact'
// import Product from './pages/Product'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import PlaceOrder from './pages/PlaceOrder'
// import Orders from './pages/Orders'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
           <Routes>
              <Route path='/' element={<Home/>} />
           </Routes>
      </div>
       <Footer/>
    </div>
    // <div '>
    // <Routes>
    //   <Route path='/' element={<Home/>} />
    //   <Route path='/collection' element={<Collection/>} />
    //   <Route path='/contact' element={<Contact/>} />
    //   <Route path='/product/:productId' element={<Product/>} />
    //   <Route path='/cart'element={<Cart/>}/>
    //   <Route path='/login'element={<Login/>}/>
    //   <Route path='/place-order'element={<PlaceOrder/>}/>
    //   <Route path='/orders'element={<Orders/>}/>
    // </Routes>

  )
}

export default App
