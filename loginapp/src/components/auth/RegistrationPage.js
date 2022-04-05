import React from "react";
import axios from "axios";

class RegistrationPage extends React.Component {
    state = {
        useremail: "",
        userpassword: "",
        usernameErr: "",
        userpasswordErr: "",
        validateLogin :false,
        showValidateMessage:"",
        addValidationClass:"",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        
        /* Form Validation */
        this.setState({ usernameErr: "" });
        this.setState({ userpasswordErr: "" })
        this.setState({ showValidateMessage: "" });
        this.setState({ addValidationClass: "" });

        if (this.state.useremail === "" && this.state.userpassword === "") {
            this.setState({ usernameErr: "Please enter your username" });
            this.setState({ userpasswordErr: "Please enter your password" });
        }else if(this.state.useremail === ""){
            this.setState({ usernameErr: "Please enter your username" });
        }else if(this.state.userpassword === ""){
            this.setState({ userpasswordErr: "Please enter your password" });
        }else{
            /* HTTP response */
            
            axios.post("https://reqres.in/api/register", {
                email: this.state.useremail,
                password : this.state.userpassword
            })
            .then(res => {
                
                console.log('response', res);
                if(res.status === 200){
                    console.log("success");
                    this.setState({ showValidateMessage: "Success! you have successfully register your account,you can login now" });
                    this.setState({ addValidationClass: "success-validation" });
                }else{
                    console.log("error");
                    this.setState({ showValidateMessage: "Error! due to some server issue,please try after sometime" });
                    this.setState({ addValidationClass: "error-validation" });
                }
            })
            .catch(err => {
                console.log('Error is=== ', err);
                this.setState({ showValidateMessage: "Error! due to some server issue,please try after sometime" });
                this.setState({ addValidationClass: "error-validation" });
            })
        }
    }

    render() {
        return (
            <>
                <div className="row registration-page">
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
                    <p className={`response-message ${this.state.addValidationClass}`}>{this.state.showValidateMessage}</p>
                </div>
            </>
        );
    }
}

export default RegistrationPage;