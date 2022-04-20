import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './css/styles.css';
class NavBar extends React.Component {
    state = {
        anchorEl: null,
        userAnchorEl: null
    }
    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    };
    handleUserMenu = (event) => {
        this.setState({ userAnchorEl: event.currentTarget })
    };
    handleClose = () => {
        this.setState({ anchorEl: null })
    };
    handleUserClose = () => {
        this.setState({ userAnchorEl: null })
    };
    render() {
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
                            onClick={this.handleMenu}
                            aria-label='menu'
                            sx={{ mr: 4 }}
                            data-testid="menu-btn"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            className="menu-navigation"
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                            data-testid="menu-close-btn"
                        >
                            <div className="menu-item">
                                <MenuItem><Link to="/search" onClick={this.handleClose} className="menu-anchor">Claim Search</Link></MenuItem>
                                <br />
                                <MenuItem><Link to="/cst" onClick={this.handleClose} className="menu-anchor">CST</Link></MenuItem>
                            </div>
                        </Menu>
                        &nbsp; &nbsp;
                        <Link to="/">
                            <img src="/assests/images/prime.jpg" height="30px" width="160px" alt = "Prime" />
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="nav-heading">
                            &nbsp; | RxRenu
                        </Typography>
                        <Button
                         className="user-btn"> Hi! User
                            &nbsp; &nbsp;
                            <IconButton
                                size="large"
                            >
                                <AccountCircle />
                                &nbsp; &nbsp;
                            </IconButton>
                            <ArrowDropDownIcon
                                aria-label="account of current user"
                                aria-controls="menu-user-appbar"
                                aria-haspopup="true"
                                onClick={this.handleUserMenu}
                            />
                        </Button>
                        <Menu
                            id="menu-user-appbar"
                            anchorEl={this.state.userAnchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.userAnchorEl)}
                            onClose={this.handleUserClose}
                            data-testid="user-close-btn"
                        >
                            <div className="menu-item">
                                <MenuItem><Link to="/#" onClick={this.handleUserClose} className="menu-anchor">Primary 1</Link></MenuItem>
                                <br />
                                <MenuItem><Link to="/#" onClick={this.handleUserClose} className="menu-anchor">Logout</Link></MenuItem>
                            </div>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box >
        );
    }
}
export default NavBar;
