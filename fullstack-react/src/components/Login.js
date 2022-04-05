import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'
const API = 'http://localhost/suman_php/CIfullStack/SignUpController/'

class Login extends React.Component {

    state={
        email:'',
        password:''
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
            }
            else{
                swal('Error!', res.data.msg, 'error')
            }
        })
        .catch(err=>{
            // console.log(err)
            swal('Error!', 'Something wrong', 'error')
        })
    }

    render() {
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