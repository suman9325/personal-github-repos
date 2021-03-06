import React from "react";
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import HomePage,{insertUser} from './Main.js';

class MyForm extends React.Component {

  constructor() {
        super();
          this.state={
            name:'',
            mail:'',
            contact:'',
            gender:'',
            location:'',
            skills:[],
            selectedFile:'',
            fileName:''
            
          }

    }

  handleInputChange = event => {
    let index;
    if (event.target.name == 'skills') {
      // this.state.skills[event.target.name]=event.target.value;
      if (event.target.checked) {
        this.state.skills.push(event.target.value);         
      }
      else {
        index = this.state.skills.indexOf(+event.target.value);   
        this.state.skills.splice(index, 1); 
      }

    }

    // else if (event.target.name == 'files') {
    //   this.setState({ files: event.target.files[0] });
    // }
    else
      this.setState({ [event.target.name]: event.target.value });
  }

    handlefileUpload = event =>{
      this.setState({ fileName: event.target.files[0].name });
      this.setState({ selectedFile: event.target.files[0] });
      // this.setState({ fileName: event.target.files[0].name });
      // let files = event.target.files;
      // let reader = new FileReader();
      // reader.readAsDataURL(files[0]);
      // reader.onload = (event) =>{
        // console.log('img data',event.target.result);
        // this.setState({ selectedFile: event.target.result });
        
        //also we can use formData
      // }
    }

    // INSERT USER
    insertUser = (event) =>{
      
      {insertUser(event,this.name.value,this.mail.value,this.contact.value,this.gender.value,this.location.value,this.skills)};
      // {insertUser(event,this.state.name,this.state.mail,this.state.contact,this.state.gender,this.state.location,this.state.skills,this.state.selectedFile,this.state.fileName)};
      
    }

    handleSubmit= event =>{
        event.preventDefault(); //to prevent any default page loading
        console.log(this.state);  //to display value
        
        if (!this.state.name || !this.state.mail || !this.state.contact || !this.state.gender || !this.state.location ) {
            alert("Form has empty fields!");
            return false;
        } else {
          // console.log(this.state.files);
          this.insertUser(event);

          // axios.post('http://localhost/suman_php/CI_react_crud/CrudControl/insertData', {
          //   user_name: this.state.name,
          //   user_email: user_email,
          //   user_contact: user_contact,
          //   user_gender: user_gender,
          //   user_location: user_location,
          //   user_skills: user_skills,
          //   user_files: user_files,
          //   file_name: file_name
          // })
          //   .then(function ({ data }) {
          //     if (data.success == 1) {
          //       alert(data.msg);
          //     }
          //     else {
          //       alert(data.msg);
          //     }
          //   }.bind(this))
          //   .catch(function (error) {
          //     console.log(error);
          //   });

        }

        
    }

  render(){

    return (
      
      <React.Fragment>
      <form encType="multipart/form-data">
          <div align="center">
              <div><h3>Basic Contact Page</h3></div>
              <table>
              <tr>
                    <td>Name</td>
                    <td><input type="text" name="name" value={this.state.name} ref={(val) => this.name = val} onChange={this.handleInputChange} /></td>
                </tr>
              <tr>
                  <td>Email</td>
                  <td><input type="email" name="mail" value={this.state.mail} ref={(val) => this.mail = val} onChange={this.handleInputChange}/></td>
              </tr>
              <tr>
                  <td>Contact</td>
                  <td><input type="text" name="contact" value={this.state.contact} ref={(val) => this.contact = val} onChange={this.handleInputChange}/></td>
              </tr>
              <tr>
                  <td>Gender</td>
                  <td><input type="radio" name="gender" value="male" ref={(val) => this.gender = val} onChange={this.handleInputChange}/>Male&nbsp;&nbsp;
                  <input type="radio" name="gender" value="female" ref={(val) => this.gender = val} onChange={this.handleInputChange}/>Female</td>
              </tr>
              <tr>
                  <td>Skills</td>
                  <td><input type="checkbox" name="skills" value="JAVA" ref={(val) => this.skills = val} onChange={this.handleInputChange}/>JAVA&nbsp;&nbsp;
                  <input type="checkbox" name="skills" value="PHP" ref={(val) => this.skills = val} onChange={this.handleInputChange}/>PHP&nbsp;&nbsp;
                  <input type="checkbox" name="skills" value="C" ref={(val) => this.skills = val} onChange={this.handleInputChange}/>C&nbsp;&nbsp;
                  <input type="checkbox" name="skills" value="C++" ref={(val) => this.skills = val} onChange={this.handleInputChange}/>C++&nbsp;&nbsp;
                  <input type="checkbox" name="skills" value="PYTHON" ref={(val) => this.skills = val} onChange={this.handleInputChange}/>PYTHON</td>
              </tr>
              <tr>
                  <td>Country</td>
                  <td>
                      <select name="location" value={this.state.location} ref={(val) => this.location = val} onChange={this.handleInputChange}>
                          <option value="">select</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                      </select>
                  </td>
              </tr>
              {/* <tr>
                <td>Upload file</td>
                <td><input type="file" name="files" onChange={this.handlefileUpload}></input></td>
                
              </tr> */}
              {/* <input type="submit" name="submit" value="SUBMIT" />*/}
              <tr align="center">
                <td colSpan="2"><button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                </td>
              </tr>
              </table>
          </div>
      </form>

      </React.Fragment>
      
    );  //end of return
  } //end of render
} // end of class

export default MyForm;
