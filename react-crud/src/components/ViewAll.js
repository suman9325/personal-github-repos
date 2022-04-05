import React from "react";
import HomePage,{getData,deleteUser,editByID} from './Main.js';
import { Redirect, Link } from "react-router-dom";
import FormUpdate from "./FormUpdate.js";

 class View extends React.Component{

    constructor(props){
        super(props);
        this.state={
            // items:[]

            userdata:[]
        }
        
    }
    componentDidMount(){
        // this.getAll();

        axios.get('http://localhost/suman_php/CI_react_crud/CrudControl/showData')

        // *******************for Laravel ***************************
        
            // return axios.get('http://localhost:8000/view')
        
            .then(({data}) => {
                if(data.success == 1){
                    // alert('from main.js = '+data.msg);
                    console.log( data.user);
                    // let tmpArr = [];
                    for( var i = 0 ; i < data.user.length ; i++ ){
                        this.state.userdata.push(data.user[i])
                    }
                    console.log('userdata',this.state.userdata);
                    // return tmpArr;
                    
                }
                else{}
            })
            .catch(error => {
                console.log(error);
            })

    }

    getAll = () =>{
        getData().then(tmpArr=>{            
            this.setState({
                items:tmpArr
            },
            ()=>{
                console.log('state',this.state.items);
            })
        })
    }   //getAll

    render(){
        
        return(
            <center>
            <div>
            <div><h3>Displaying all data from Table</h3></div>
            <div>
            <table>
                <thead>
                    
                    <tr>
                        <td>ID</td>&nbsp;&nbsp;&nbsp;
                        <td>Username</td>&nbsp;&nbsp;&nbsp;
                        <td>Email</td>&nbsp;&nbsp;&nbsp;
                        <td>Phone</td>&nbsp;&nbsp;&nbsp;
                        <td>Gender</td>&nbsp;&nbsp;&nbsp;
                        <td>Location</td>&nbsp;&nbsp;&nbsp;
                        <td>Skills</td>&nbsp;&nbsp;&nbsp;
                        {/* <td>File</td>&nbsp;&nbsp;&nbsp; */}
                        <td>Action</td>
                        
                    </tr>
                
                </thead>
                
                <tbody>
                    {this.state.userdata.map((item) =>(
                        <tr>
                        
                            <td>{item.id}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.username}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.email}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.phone}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.gender}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.location}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.skills}</td>&nbsp;&nbsp;&nbsp;
                            
                            {console.log(item.documents.substring(item.documents.indexOf('upload')+7,item.documents.length))}
                            {/* <td><img src={"http://127.0.0.1:8887/"+(item.documents.substring(item.documents.indexOf('upload')+7,item.documents.length))} height="50" width="50"></img>
                                
                                </td>&nbsp;&nbsp;&nbsp; */}
                            {/* <td><img src={item.documents}></img> </td> */}
                            <td colSpan="2">
                                <Link to={{pathname : "/FormUpdate", id: (item.id) }}>
                                <button className="btn btn-success" >Edit</button></Link>&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => deleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                        
                        
                     ) )}
                </tbody>
            </table>
            </div>
            </div>
            </center>
        );
    }
 }
//  
 export default View;