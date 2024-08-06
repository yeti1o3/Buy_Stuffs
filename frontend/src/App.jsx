import './styles/App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Cart from './pages/cart/Cart'
function App() {
  
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/productdetail/:id'} element={<ProductDetail/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
