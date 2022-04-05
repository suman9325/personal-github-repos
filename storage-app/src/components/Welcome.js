import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import Storage from '../externaljs/Storage';
import swal from 'sweetalert';

class Welcome extends Component {
    state = {
        id: 24,
        isLogin: true
    }

//    componentDidUpdate(prevState){
//        if(prevState.isLogin != this.state.isLogin){
//         this.setState({ isLogin: false })
//        }
//    }

    handleLogout = (e) => {
        if (Storage.get('isLogin')) {
            Storage.remove('isLogin')
            this.setState({ isLogin: false })
            swal('Success!', 'Logged out successfully', 'success');
        }
        else {
            this.setState({ isLogin: false })
            swal('Hello!', 'You are not logged in', 'info');
        }
    }

    render() {
        if (this.state.isLogin == false) {
            return <Redirect to='/login' />
        }
        return (
            <React.Fragment>
                <h4>
                    <nav>
                        <NavLink to="/signup">Signup</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                        <NavLink to="/dashboard">Dashboard</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* {this.state.isLogin ? */}
                            <a href="javascript:void(0)" onClick={this.handleLogout}>Logout</a>
                            :
                            <NavLink to="/login">Login</NavLink>
                        {/* } */}


                    </nav>
                </h4>

                {/* <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/view">View</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><a href="javascript:void(0)" onClick={this.handleLogout}>Logout</a></li>
                </ul> */}
            </React.Fragment>
        );
    }
}

export default Welcome;
