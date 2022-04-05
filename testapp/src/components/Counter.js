import React from 'react';

class MyCounter extends React.Component{
    constructor(){
        super();
        this.state={
            count : 0,
            user_info:{
                name:'',
                phone:''
            }
        }
    }

    increment = () =>{
        this.state.count++;
        this.setState({count:this.state.count});
    }

    decrement = () =>{
        this.state.count--;
        if(this.state.count <= 0)
            this.setState({count:0});
        else
            this.setState({count:this.state.count});
    }

    render(){
        return(
            <div>
                <div>Counter</div><br></br>
                <div>
                    <button onClick = {this.increment}>Increment</button>&nbsp;&nbsp;&nbsp;
                    <span>{this.state.count}</span>&nbsp;&nbsp;&nbsp;
                    <button onClick = {this.decrement}>Decrement</button>
                </div>
            </div>
            
        );
    }
}

export default MyCounter;