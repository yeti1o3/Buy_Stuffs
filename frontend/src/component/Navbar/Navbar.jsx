import { useSelector } from "react-redux";
import '../../styles/Navbar.css'
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";


function Navbar() {
    const user=useSelector((state)=>state.user);
    console.log(user);  

  return (
    <nav className="Navbar">
        <div>
            <Link to={'/'}><h1>Buy Stuff</h1></Link>
        </div>
        <NavbarLink user={user}/>
    </nav>
  )
}

export default Navbar
