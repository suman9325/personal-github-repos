import React from "react";
import { withRouter } from "react-router-dom";
class Navbar extends React.Component{
    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
        
    }
    render(){
        return(
            <button onClick={this.logout}>Logout</button>
        );
    }
}

export default withRouter(Navbar);