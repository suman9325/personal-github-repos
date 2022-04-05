import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
class Login extends React.Component {
    state = {
        name: "test",
        password: "123",
        username: "",
        userpassword: "",
        arr: [],
        usernameErr: "",
        loading: false
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {


        if (/[^0-9a-zA-Z]/.test(this.state.username) || this.state.username == '')  //check any special char
        {
            this.setState({ usernameErr: "Special chars not allowed" })
            return
        }
        else {
            this.setState({ usernameErr: "", loading: true })
            axios.post("https://reqres.in/api/login", {
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    console.log("Response", res);
                    localStorage.setItem("token", res.data.token)
                    this.props.history.push('/dashboard')

                })
                .catch(err => {
                    console.log('Error is=== ', err);
                })
                .finally(
                    this.setState({ loading: false })
                )
        }




    }

    // axios.get("url/"+id)
    // .then(res=>{

    // })
    // .catch(err=>{

    // })

    // axios.post("url", json_data)
    // .then(res=>{

    // })
    // .catch(err=>{

    // })


    render() {
        return (
            <>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange} />
                {this.state.usernameErr}
                <br />
                <label>Password</label>
                <input type="password" name="userpassword" onChange={this.handleChange} />
                <br />
                <button onClick={this.handleSubmit}>Submit</button>


            </>
        );
    }
}

export default withRouter(Login);