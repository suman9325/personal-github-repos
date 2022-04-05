import React from 'react';
import {handleSubmitForm} from '../externalJS/validfile';

class MyForm extends React.Component{

    constructor(){
        super();
        this.state={
            userName:'',
            userEmail:'',
            userAddress:'',
            errors: {}
        }
    }

    handleChange = (e) =>{
        
        this.setState({[e.target.name] : e.target.value})
        
    }

    handleSubmit = (e) =>{
        
        e.preventDefault();
        let form_error = {};
        form_error = handleSubmitForm(e,this.state);
        // console.log(form_error);
        this.setState({errors : form_error});
    }


    render(){
        return(
            <div>
                {/* <form onSubmit={(e)=>handleSubmitForm(e,this.state)} > */}
                <form action="/mail" onSubmit={this.handleSubmit} method="POST">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        Registration Form
                                    </label>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.handleChange}></input>
                                    <span>{this.state.errors["userName"]}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <input type="email" name="userEmail" id="userEmail" value={this.state.userEmail} onChange={this.handleChange}></input>
                                    <span>{this.state.errors["userEmail"]}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Address</label>
                                </td>
                                <td>
                                    <input type="text" name="userAddress" id="userAddress" value={this.state.userAddress} onChange={this.handleChange}></input>
                                    <span>{this.state.errors["userAddress"]}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <input type="submit" value="SUBMIT" name="btn_submit" className="btn_submit"></input>&nbsp;&nbsp;&nbsp;
                                    <input type="reset" value="RESET"></input>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default MyForm;