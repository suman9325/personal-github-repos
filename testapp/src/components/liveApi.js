import React from 'react';
import axios from 'axios';
// import swal from 'sweetalert';
class LiveApicheck extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})        
    }
    handleClick=(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/login',{
            email:"eve.holt@reqres.in",
            password: "cityslicka",
         }
        )
        .then(response=>{
            console.log(response);
            if(response.data=='1'){
                // swal('Success',response.msg,'success')
                alert('Success')
            }else{
                // swal('Error!', response.msg,'error')
            }

        })
        .catch(err=>{
            // swal('Error!','something went worng','error')
        })
    }
    render(){
        return(
            <form method="post">
                Email: <input type="email" name="email" onChange={this.handleChange}/><br/>
                Password: <input type="password" name="password" onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleClick}/>
            </form>
        )
    }
}
export default LiveApicheck;

// https://reqres.in