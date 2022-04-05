import React from 'react';

class PasswordToggle extends React.Component{
    constructor(){
        super();
        this.state = {
            btn_visibility : true,
            pwd_visibility : true
        }
    }

    toggle = () =>{
        this.setState({
            btn_visibility : !this.state.btn_visibility,
            pwd_visibility : !this.state.pwd_visibility 
        });
    }

    render(){
        return(
            <div>
                <label>Enter Password</label>
                <input type = {this.state.pwd_visibility ? "password" : "text"} ></input>
                <button onClick = {this.toggle}>{this.state.btn_visibility ? "Show" : "Hide"}</button>
            </div>
        );
    }
}

export default PasswordToggle;