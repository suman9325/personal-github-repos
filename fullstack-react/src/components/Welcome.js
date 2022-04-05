import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Welcome extends Component {
    state = {
        id: 23
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/view">View</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to={{ pathname: "/mock", id1: 2, id2: 34 }}>MockPage 1</Link></li>
                    <li><Link to={"/mock/" + this.state.id}>MockPage 2</Link></li>
                    <li><Link to={{
                        pathname: "/mock",
                        state:{
                            id1: 2, 
                            id2: 34,
                            username:'user'
                        }
                    }}>
                        MockPage 3</Link></li>
                </ul>

                {/* <div class="vl"></div> */}

            </React.Fragment>
        );
    }
}

export default Welcome;
