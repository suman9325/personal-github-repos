import React from "react";
import axios from "axios";

class LoginPage extends React.Component {
    state = {
        useremail: "",
        userpassword: "",
        usernameErr: "",
        userpasswordErr: "",
        validateLogin :false,
        showValidateMessage:"",
    }

    // constructor() {
    //     super()
    //     this.state = {
    //         useremail: "",
    //         userpassword: "",
    //         usernameErr: "",
    //         userpasswordErr: "",
    //         validateLogin :false,
    //         showValidateMessage:"",
            
    //     }
    // }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        
        /* Form Validation */
        this.setState({ usernameErr: "",userpasswordErr: "",showValidateMessage: "" });

        if (this.state.useremail === "" && this.state.userpassword === "") {
            this.setState({ usernameErr: "Please enter your username",userpasswordErr: "Please enter your password" });
        }else if(this.state.useremail === ""){
            this.setState({ usernameErr: "Please enter your username" });
        }else if(this.state.userpassword === ""){
            this.setState({ userpasswordErr: "Please enter your password" });
        }else{
            /* HTTP response */
            
            axios.post("https://reqres.in/api/login", {
                email: this.state.useremail,
                password : this.state.userpassword
            })
            .then(res => {
                
                console.log('response', res);
                if(res.status === 200){
                    console.log("success");
                    // sessionStorage.setItem('resData', JSON.stringify(res));
                    localStorage.setItem('resData', JSON.stringify(res));
                    // this.props.history.push("/Dashboard");
                    // this.props.history.push({
                    //     pathname:"/Dashboard",
                    //     resData:JSON.stringify(res),
                    // });
                    // this.props.history.push('/dashboard');
                    
                }else{
                    console.log("error",localStorage.getItem("resData"));
                    this.setState({ showValidateMessage: "Invalid Login credential" })
                    
                    if (localStorage.getItem("resData") !== null) {
                        localStorage.removeItem('resData');
                    }
                }
            })
            .catch(err => {
                this.setState({ showValidateMessage: "Invalid Login credential" })
                console.log('Error is=== ', err);
                if (localStorage.getItem("resData") !== null) {
                    localStorage.removeItem('resData');
                }
            })
        }
    }

    render() {
        return (
            <>
                <div className="row login-page">
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type="text" name="useremail" value={this.state.useremail} onChange={this.handleChange} />
                        <p className="error-validation">{this.state.usernameErr}</p>
                        <br />
                        <label>Password</label>
                        <input type="password" name="userpassword" value={this.state.userpassword} onChange={this.handleChange} />
                        <p className="error-validation">{this.state.userpasswordErr}</p>
                        <br />
                        <input type="submit" value="SUBMIT" />
                    </form>
                    <p className="error-validation">{this.state.showValidateMessage}</p>
                </div>
            </>
        );
    }
}

export default LoginPage;