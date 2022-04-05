import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Storage from '../externaljs/Storage';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        if (!Storage.get('isLogin')) {
            swal('Error!', 'Please Login first', 'error')
            return <Redirect to='/login' />
        }
        // if(!localStorage.getItem('isLogin')){
        //     return <Redirect to='/login' />
        // }

        return (
            <div class="jumbotron">
                <h1>Welcome to Dashboard</h1>
                <p>Explore NOW!</p>
            </div>
        );
    }
}

export default Dashboard;