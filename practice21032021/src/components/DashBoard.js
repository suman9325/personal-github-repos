import React, { Component } from 'react'
import { Redirect } from 'react-router'
import swal from 'sweetalert';

 class DashBoard extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   
  render() {
    if(!localStorage.getItem("user_id")){
        return <Redirect to="/Login"> </Redirect>
    }
    else{
      
      swal('!Logged In','Already logged in','success');
    }
    return (
      <div>
      <h1>DashBoard</h1>
        
      </div>
    )
  }
}

export default DashBoard
