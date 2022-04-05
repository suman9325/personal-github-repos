import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert';
 class Signup extends Component {

  constructor(){
    super()
    this.state={
      email:"",
      password:"",
    }
  }

  InitializeData =(e) =>{
    this.setState({[e.target.name]:e.target.value});
  }
  CallApi =(e)=>{
    e.preventDefault();
    axios.post('https://reqres.in/api/register',{email:this.state.email , password:this.state.password})
    .then(res=>{
      console.log(res);
      this.props.history.push("/Login");

    })
    .catch(err=>{
      console.log(err);
    })

  }
  render() {
    return (
      <div>

      <h1>Signup </h1>
      <form onSubmit={this.CallApi}>
        <input type="text" name="email" placeholder="Enter email" onChange={this.InitializeData} />
        <input type="password" name="password" placeholder="Enter password" onChange={this.InitializeData} />
        <input type="submit" value="Send" />
      </form>
        
      </div>
    )
  }
}

export default Signup
