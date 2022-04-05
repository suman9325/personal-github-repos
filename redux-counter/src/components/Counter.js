import React from 'react';
import { connect } from 'react-redux';

class MyCounter extends React.Component{

    constructor(){
        super();
        // this.state={
        //     count : 0
        // }
    }

    increment = () =>{

    }

    decrement = () =>{
        
    }

    render(){
        return(
            <div>
                <button className="btn btn-success" onClick={this.increment}>+</button>&nbsp;&nbsp;
                {this.props.count}&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={this.decrement}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }


export default connect(mapStateToProps)(MyCounter);