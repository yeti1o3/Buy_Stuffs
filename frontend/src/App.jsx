import './styles/App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Cart from './pages/cart/Cart'
import { useSelector } from 'react-redux'
import AddProduct from './admin/AddProduct'
function App() {
    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/register'} element={isLoggedIn?<Navigate to='/'/>:<Register/>}/>
          <Route path={'/login'} element={isLoggedIn?<Navigate to='/'/>:<Login/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/productdetail/:id'} element={<ProductDetail/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/admin'} element={<AddProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
