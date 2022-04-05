import React, { Component } from 'react'

class Counter extends Component {

  state = {
        score: 0,
        name:'abc'
      }

  selectedData=()=> {
    
      this.setState({score: this.state.score + 1}, ()=>{
        console.log('score', this.state.score);
      })
  }



  render() {
    // console.log("new Value", this.state.score);

    return (
      <div>
          <button onClick={this.selectedData}></button>
      </div>
    )
  }
}

export default Counter;
