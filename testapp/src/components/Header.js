import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h3>Page Heading</h3>
                <h4>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </h4>
            </div>
        );
    }

}

export default Header;