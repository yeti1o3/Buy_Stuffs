import './styles/App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
function App() {
  
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
