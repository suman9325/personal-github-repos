import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router'
import swal from 'sweetalert';
import '../Style/style.css'
import EachDta from './EachDta';

class GetUserData extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userData: [],
    }
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        console.log(res);
        console.log(res.data.data[0].email);
        this.setState({ userData: res.data.data });
      })
      .catch(err => {
        console.log(err);
      })

  }



  render() {
    if (!localStorage.getItem("user_id")) {
      return <Redirect to="/Login"> </Redirect>
    }
    else {

      swal('!Logged In', 'Already logged in', 'success');
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {
              this.state.userData.map((user,index)=>{
                return(
                  <div className="col-md-6" key={index}>
                    <label>{user.id}</label>
                    {/* now you can design your own view here */}
                  </div>
                )
              })
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GetUserData
