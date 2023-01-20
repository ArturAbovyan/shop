import "../style.scss"

import {Link, useNavigate} from "react-router-dom"
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import logo from "../../../assets/logo.png"
import {Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";

import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import {PersonAdd, Settings} from "@mui/icons-material";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NavBar = () => {
    const context = useContext(AuthContext);

    const navigate = useNavigate()

// avatar menu
    const handleLogout = () => {
        context.logout()
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                <IconButton  aria-label="messages" component="label" onClick={()=> { navigate("/") }} sx = {{color: "white"}}>
                    <LocalPostOfficeIcon />
                </IconButton>
                <IconButton  aria-label="favorite" component="label" onClick={()=> { navigate("/") }} sx = {{color: "white"}}>
                    <FavoriteIcon />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', paddingLeft:"0" , width:"4vw"}}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => {navigate("/user")}}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                </Menu>
                <IconButton  aria-label="log out" component="label" onClick={handleLogout} sx = {{color: "white"}}>
                    <LogoutIcon />
                    <span className="logout">Log Out</span>
                </IconButton>
            </div>
        </div>
    )
}

export default NavBar;