import React, { useState, useEffect } from 'react';
import './css/styles.css'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
        // setState({ anchorEl: event.currentTarget });
    }

    const handleUserMenu = (event) => {
        setUserAnchorEl(event.currentTarget)
        // setState({ userAnchorEl: event.currentTarget });
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleUserClose = () => {
        setUserAnchorEl(null);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className="hamburger"
                        size="large"
                        edge="start"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 4 }}
                        data-testid="menu-btn"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        data-testid="menu-close-btn"
                    >
                        <div className="menu-item">
                            <MenuItem><Link to="/search" onClick={handleClose} className="menu-anchor" data-testid="menu-close-btn">Claim Search</Link></MenuItem>
                            <br />
                            <MenuItem><Link to="/cst" onClick={handleClose} className="menu-anchor" data-testid="menu-close-btn">CST</Link></MenuItem>
                        </div>
                    </Menu>
                    &nbsp;&nbsp;
                    <Link to="/">
                        <img src="/assests/images/prime.jpg" height="30px" width="160px" />
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="nav-heading">
                        &nbsp; | RxRENU
                    </Typography>
                    <Button color="inherit" className="user-btn">Hi! User
                        &nbsp; &nbsp;
                        <IconButton size="large" color="inherit">
                            <AccountCircle />
                            &nbsp; &nbsp;
                        </IconButton>
                        <ArrowDropDownIcon
                            aria-label="account of current user"
                            aria-controls="menu-user-appbar"
                            aria-haspopup="true"
                            onClick={handleUserMenu}
                            data-testid="user-btn"
                        />
                    </Button>
                    <Menu
                        id="menu-user-appbar"
                        anchorEl={userAnchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(userAnchorEl)}
                        onClose={handleUserClose}
                        data-testid="user-close-btn"
                    >
                        <div className="menu-item">
                            <MenuItem><Link to="/#" onClick={handleUserClose} className="menu-anchor" data-testid="user-close-btn"> Primary 1</Link></MenuItem>
                            <br />
                            <MenuItem><Link to="/#" onClick={handleUserClose} className="menu-anchor" data-testid="user-close-btn"> Logout </Link></MenuItem>
                        </div>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box >
    )

}

export default NavBar;
