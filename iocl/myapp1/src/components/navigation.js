import React,{Component} from "react";
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  state={
    user_id:''
  }

  // handleChange=(e)=>{
  //   this.setState({user_id:e.target.value})
  // }

  render(){
    return (
      <ul>
        <li><Link to="/welcome"><i className="fa fa-circle-o"></i>Welcome</Link></li>
        {/* <input type="text" name="user_id" value={this.state.user_id} onChange={this.handleChange}></input>

        <li><Link to= {{pathname : "/welcome", uid : this.state.user_id }}><i className="fa fa-circle-o"></i>Welcome</Link></li> */}

        <li><Link to="/registration"><i className="fa fa-circle-o"></i>Registration</Link></li>

      </ul>
    );
  }
}

export default Navigation;
