import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Storage from '../externaljs/Storage';
import { Redirect } from 'react-router-dom';

// const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'
const API = 'http://localhost/suman_php/CIfullStack/SignUpController/'

class Login extends React.Component {

    state={
        email:'',
        password:'',
        isLogin:false
    }

    componentDidMount(){
        if (Storage.get('isLogin')) {
            this.setState({ isLogin: true })
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state)
        axios.post(API+'login',JSON.stringify({
            email:this.state.email,
            password: this.state.password
        }))
        .then(res=>{
            if(res.data.success==1){
                swal('Success!', res.data.msg, 'success')
                // localStorage.setItem('isLogin',true)
                // localStorage.getItem('isLogin')
                // localStorage.removeItem('isLogin')
                // sessionStorage.setItem('isLogin',true)

                Storage.set('isLogin',true)


                this.setState({isLogin:true})
            }
            else{
                swal('Error!', res.data.msg, 'error')
                Storage.set('isLogin',false)
                this.setState({isLogin:false})
            }
        })
        .catch(err=>{
            // console.log(err)
            swal('Error!', 'Something wrong', 'error')
            Storage.set('isLogin',false)
            this.setState({isLogin:false})
        })
    }

    render() {
        
        if (this.state.isLogin) {
            swal('Success!', 'Login Successful', 'success')
            return <Redirect to='/dashboard' />
        }
        
        return (
            <React.Fragment>
                <form>
                    <label>Enter email id</label>
                    <input type="text" name="email" onChange={this.handleChange}></input><br />
                    <label>Enter password</label>
                    <input type="password" name="password" onChange={this.handleChange}></input><br />
                    <input type="submit" onClick={this.handleSubmit} value="LOGIN"></input>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;