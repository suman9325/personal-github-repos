import React, { Component } from 'react'

export class EachDta extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <div className="MainEach">
                    <h5>email: {this.props.pass.email}</h5>
                    <h1>{this.props.pass.first_name} {this.props.pass.last_name}</h1>
                    <img src={this.props.pass.avatar}></img>
        </div>
      </div>
    )
  }
}

export default EachDta
