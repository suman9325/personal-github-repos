import React from 'react';
import axios from 'axios';
import {BrowserRouter as Redirect, Link} from 'react-router-dom';
import FormUpdate from './FormUpdate';


class HomePage extends React.Component{

    // getView = () =>{
    //     if(true){
    //         this.props.history.push('/ViewAll/');
    //     }
    // }

    // getForm = () =>{
    //     if(true){
    //         this.props.history.push('/Form/');
    //     }
    // }

    render(){
        
        return(
            // <aside>
            //     <span>CRUD example using Laravel and React</span>
            //     <div>
            //         {/* <ul>
            //             <li><Link to="/Form"><i className="fa fa-circle-o"></i>Go To Form</Link></li>
            //             <li><Link to="/ViewAll"><i className="fa fa-circle-o"></i>View</Link></li>
            //         </ul> */}
            //         <button onClick={this.getForm}>Form</button>&nbsp;&nbsp;&nbsp;
            //         <button onClick={this.getView}>View Data</button>                    
            //     </div>
            //     <hr></hr>
            // </aside>

            <div className="wrapper">
      
            <header className="main-header">
              <b>CRUD example using Laravel and React</b>
            </header>
            <aside className="main-sidebar">
              <section className="sidebar">
            
                <ul className="sidebar-menu">
                 
                  
                    <ul className="treeview-menu">
                      <li><Link to="/Form"><i className="fa fa-circle-o"></i>Form</Link></li>
                      <li><Link to="/ViewAll"><i className="fa fa-circle-o"></i>View</Link></li>
                    </ul>
                  
       
                </ul>
              </section>
            </aside>

          </div>
            
        );
    }
}   //class

const insertUser = (event,user_name,user_email,user_contact,user_gender,user_location,user_skills,user_files,file_name) => {
    
    event.preventDefault();
    event.persist();
    // console.log(user_files);
    // *******************for CodeIgniter ***********************
    axios.post('http://localhost/suman_php/CI_react_crud/CrudControl/insertData',{
        user_name:user_name,
        user_email:user_email,
        user_contact:user_contact,
        user_gender:user_gender,
        user_location:user_location,
        user_skills:user_skills,
        user_files:user_files,
        file_name:file_name
    })
    // *******************for Laravel ***************************
        //   axios.post('http://localhost:8000/insert',{
        //     user_name:user_name,
        //     user_email:user_email,
        //     user_contact:user_contact,
        //     user_gender:user_gender,
        //     user_location:user_location,
        //     user_skills:user_skills,
        //     user_files:user_files,
        //     file_name:file_name
        // })
    .then(function ({data}) {
        if(data.success == 1){
            alert(data.msg);
        }
        else{
            alert(data.msg);
        }
    }.bind(this))
    .catch(function (error) {
        console.log(error);
    });
}   //insertUser

const updateUser = (event,user_id,user_name,user_email,user_contact,user_gender,user_location,user_skills,user_files,file_name) => {
    event.preventDefault();
    event.persist();
    // *******************for Laravel ***************************
          axios.post('http://localhost:8000/update',{
            user_id:user_id,
            user_name:user_name,
            user_email:user_email,
            user_contact:user_contact,
            user_gender:user_gender,
            user_location:user_location,
            user_skills:user_skills,
            user_files:user_files,
            file_name:file_name
        })
    .then(function ({data}) {
        if(data.success == 1){
            alert(data.msg);
        }
        else{
            alert(data.msg);
        }
    }.bind(this))
    .catch(function (error) {
        console.log(error);
    });
}   //updateUser

const getData = function(){

// *******************for CI ***************************

    return axios.get('http://localhost/suman_php/CI_react_crud/CrudControl/showData')

// *******************for Laravel ***************************

    // return axios.get('http://localhost:8000/view')

    .then(({data}) => {
        if(data.success == 1){
            // alert('from main.js = '+data.msg);
            console.log( data.user);
            let tmpArr = [];
            for( var i = 0 ; i < data.user.length ; i++ ){
                tmpArr.push(data.user[i])
            }
            console.log('tmparr',tmpArr);
            return tmpArr;
            
        }
        else{}
    })
    .catch(error => {
        console.log(error);
    })
}   //getData

const deleteUser = (id) =>{
    // *******************for Laravel ***************************
    axios.post('http://localhost:8000/delete',{
            id:id
        })
        .then(({data}) => {
            if(data.success == 1){
                alert(data.msg);               
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
}   //deleteUser

const editByID = (id) =>{
    // *******************for Laravel ***************************
    return axios.post('http://localhost:8000/getbyID',{
            id:id
        })
        .then(({data}) => {
            if(data.success == 1){
                // alert(data.msg);  
                let tmpArr = [];
                for( var i = 0 ; i < data.user.length ; i++ ){
                    tmpArr.push(data.user[i])
                }
                return tmpArr
            }
            else{
                alert(data.msg);
            }
            
        })
        .catch(error => {
            console.log(error);
        });
}   //editByID



export default HomePage;
export {getData,insertUser,deleteUser,editByID,updateUser};