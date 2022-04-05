import React from "react";
import Index from './navigation.js';
import {BrowserRouter as Redirect} from 'react-router-dom';
class Registration extends React.Component {

  constructor(props) {
        super(props);
      /*  this.state = {
            fields: {      //fields is varibale name
              name:'',
              roll:'',
              class:'',
            },
          } */
          this.state={
            name:'',
            roll:'',
            class:'',
            // redirectToReferrer: false
          }

    }

  handleInputChange= event => {
    {/*  let form_data = Object.assign({}, this.state.fields);
      form_data[event.target.name] = event.target.value;
      this.setState({ fields: form_data},()=>{}
      );
    */}
    this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit= event =>{
        // event.preventDefault(); //to prevent any default page loading
        console.log(this.state);  //to display value
        console.log(this.state.class) // to display or fetch a particular value
        if (!this.state.class) {
            alert("class Cannot blank");
            return false;
        } else {
          alert("class ok");
          // this.setState({redirectToReferrer:true});
        }
    }

  render(){
    // to redirect to a path
    // const redirectToReferrer = this.state.redirectToReferrer;
    // alert(redirectToReferrer);
        // if (redirectToReferrer == true) {
        //     return <Redirect to="/login_success" />
        // }

    return (
      <React.Fragment>
      <form action="/login_success" onSubmit={this.handleSubmit}>
          <div align="center">
              Enter name<input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} /><br/>
              Enter roll<input type="text" id="roll" name="roll" value={this.state.roll} onChange={this.handleInputChange}/><br/>
              Enter class<input type="text" id="class" name="class" value={this.state.class} onChange={this.handleInputChange}/><br/>
              {/* <input type="submit" name="submit" value="SUBMIT" />*/}
              {/* <button className="btn btn-success" onClick={this.handleSubmit}>Save</button> */}
              <input type="submit" value="SUBMIT"></input>
          </div>
      </form>

      </React.Fragment>
    );  //end of return
  } //end of render
} // end of class

export default Registration;
