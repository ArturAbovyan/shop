import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return(
        <div className="navbar">
            <IconButton  aria-label="home" component="label" onClick={()=> { navigate("/") }} sx = {{color: "white", border: "1px solid white", borderRadius: "5px", padding:"0"}}>
                <MenuIcon  sx={{ height:"4vh", width:'2vw', padding: 0}}/>
            </IconButton>

            <div className="navbarLogo">
                <img src={logo} className="navbarLogo"/>
            </div>

            <div>
                <input type="text" className="searchInput"/>
            </div>
            <div className="navButton">
                <IconButton  aria-label="home" component="label" onClick={()=> { navigate("/") }} sx = {{color: "white"}}>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton  aria-label="log out" component="label" onClick={()=> { navigate("/login") }} sx = {{color: "white"}}>
                    <LoginIcon/>
                </IconButton>
            </div>
        </div>
    )
}



export default Navbar;