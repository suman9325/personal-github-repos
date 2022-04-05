import React from "react";
import {editByID,updateUser} from './Main.js';

class FormUpdate extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
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

    componentDidMount(){
        this.getAllByID();
    }

    getAllByID = () =>{
        editByID(this.props.location.id).then(tmpArr=>{            
            this.setState({
                items:tmpArr                
            },
            ()=>{
                console.log(this.state.items);
                // console.log(this.state.items[0].id);
            })
        })
    }   //getAllByID

    handleInputChange= event => {
        let index;
        if(event.target.name=='skills'){
          // this.state.skills[event.target.name]=event.target.value;
          if(event.target.checked){
            this.state.skills.push(event.target.value);
          }
          else{
            index = this.state.skills.indexOf(+event.target.value);
            this.state.skills.splice(index, 1);
          }
          
        }
    
        // else if(event.target.name=='files')
        // {
        //   this.setState({files:event.target.files[0].name});
        // }
        // else
        //   this.setState({[event.target.name]: event.target.value});
        }

        handlefileUpload = event =>{
            this.setState({ fileName: event.target.files[0].name });
            let files = event.target.files;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (event) =>{
              // console.log('img data',event.target.result);
              this.setState({ selectedFile: event.target.result });
              
              //also we can use formData
            }
          }

    // update USER
    updateUser = (event) =>{
      
        {updateUser(event,this.state.items[0].id,this.name.value,this.mail.value,this.contact.value,this.gender.value,this.location.value,this.state.skills,this.state.selectedFile,this.state.fileName)};
      }


    render(){
    return(
        <React.Fragment>
        <center>
        <form onSubmit={this.updateUser}>
            <div>Update form</div>
            <div>
            {this.state.items.map((item) =>(
                <table>
                    <tbody>
                    
                        <tr>
                            <td>Name</td>   
                            <td><input type="text" name="name"  defaultValue={this.state.items[0].username} ref={(val) => this.name = val} /></td>
                            {/* <td><input type="hidden" ></input></td> */}
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="mail" defaultValue={this.state.items[0].email} ref={(val) => this.mail = val} /></td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td><input type="text" name="contact" defaultValue={this.state.items[0].phone} ref={(val) => this.contact = val}/></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td><input type="radio" name="gender" checked={(this.state.items[0].gender=="male")?true:""} value="male" ref={(val) => this.gender = val} />Male
                                <input type="radio" name="gender" checked={(this.state.items[0].gender=="female")?true:""} value="female" ref={(val) => this.gender = val}/>Female</td>
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
                                <select name="location" defaultValue={this.state.items[0].location} ref={(val) => this.location = val}>
                                    <option value="">select</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Upload file</td>
                            <td><input type="file" name="files" onChange={this.handlefileUpload}></input></td>
                        </tr>
                        <tr>
                            <td>
                               <button type="submit" className="btn btn-success">Update</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                ))}
            </div>
        </form>
        </center>    
        </React.Fragment>
    );
}

}

export default FormUpdate;

        // <center>
        // <div>
        // <div><h3>Displaying all data from Table</h3></div>
        // <div>
        // <table>
        //     <thead>
        //         <tr>
        //             <td>ID</td>&nbsp;&nbsp;&nbsp;
        //             <td>Username</td>&nbsp;&nbsp;&nbsp;
        //             <td>Email</td>&nbsp;&nbsp;&nbsp;
        //             <td>Phone</td>&nbsp;&nbsp;&nbsp;
        //             <td>Gender</td>&nbsp;&nbsp;&nbsp;
        //             <td>Location</td>&nbsp;&nbsp;&nbsp;
        //             <td>Action</td>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {this.state.items.map((item) =>(
        //             <tr>
        //                 <td>{item.id}</td>&nbsp;&nbsp;&nbsp;
        //                 <td>{item.username}</td>&nbsp;&nbsp;&nbsp;
        //                 <td>{item.email}</td>&nbsp;&nbsp;&nbsp;
        //                 <td>{item.phone}</td>&nbsp;&nbsp;&nbsp;
        //                 <td>{item.gender}</td>&nbsp;&nbsp;&nbsp;
        //                 <td>{item.location}</td>&nbsp;&nbsp;&nbsp;
        //                 <td colSpan="2">
        //                     <button className="btn btn-success" >Update</button>&nbsp;&nbsp;&nbsp;
        //                     {/* <button className="btn btn-danger" >Delete</button> */}
        //                 </td>
        //             </tr>
        //          ) )}
        //     </tbody>
        // </table>
        // </div>
        // </div>
        // </center>
