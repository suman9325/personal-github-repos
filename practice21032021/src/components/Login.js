import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

 class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
          email:"",
          password:"",
    }
  }
  LoginInitializeData =(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  CallApiLogin =(e)=>{
    e.preventDefault();
    axios.post('https://reqres.in/api/login',{email:this.state.email, password:this.state.password})
    .then(res=>{
      
      console.log(res);
      
      localStorage.setItem("user_id" , res.data.token);
      if(localStorage.getItem("user_id")){
        swal("Success!","Login successful",'success') 
            .then((value) => {
              this.props.history.push("/GetUserData");
            });
      }
      
    })
    .catch(err =>{
      swal("Error!","Login Error",'error');
      console.log(err);
    })

  }
  
  render() {
    return (
      <div>
         <h1>Login </h1>
      <form onSubmit={this.CallApiLogin}>
        <input type="text" name="email" placeholder="Enter email" onChange={this.LoginInitializeData} />
        <input type="password" name="password" placeholder="Enter password" onChange={this.LoginInitializeData} />
        <input type="submit" value="SendLog" />
      </form>
      </div>
    )
  }
}

export default Login
