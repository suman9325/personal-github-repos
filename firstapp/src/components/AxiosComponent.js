import React from "react";
import axios from "axios";

class AxiosComponent extends React.Component {
    state = {
        useremail: "",
        userpassword: "",
        usernameErr: "",
        userpasswordErr: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.useremail == "") {
            this.setState({ usernameErr: "user name is blank" })
        }
        else {
            this.setState({ usernameErr: "" })
        }
        if (this.state.userpassword == "") {
            this.setState({ userpasswordErr: "user password is blank" })
        }
        else {
            this.setState({ userpasswordErr: "" })
        }
        if (this.state.useremail !== "" && this.state.userpassword !== "") {

            // axios.post("http://api/url", {name: this.state.useremail, password: this.state.userpassword})
            // .then(res=>{
            //     // if server response is only 200 then control comes here
            //     console.log('response', res);
            // })
            // .catch(err=>{
            //     console.log('Error is=== ', err);
            // })


            // Example

            axios.post("https://reqres.in/api/login", {
                email: this.state.useremail,
                password : this.state.userpassword
            })
                .then(res => {
                    // if server response is only 200 then control comes here
                    console.log('response', res);
                    console.log('response', res.data.token);
                })
                .catch(err => {
                    console.log('Error is=== ', err);
                })

        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="useremail" value={this.state.useremail} onChange={this.handleChange} />
                    <p>{this.state.usernameErr}</p>
                    <br />
                    <label>Password</label>
                    <input type="password" name="userpassword" value={this.state.userpassword} onChange={this.handleChange} />
                    <p>{this.state.userpasswordErr}</p>
                    <br />
                    <input type="submit" value="SUBMIT" />
                </form>
            </>
        );
    }
}

export default AxiosComponent;

// npm install axios