import React from 'react';
import MyProps2 from './Props2';

class MyProps1 extends React.Component{

    constructor(){
        super();
        this.state={
            username:'',
            message:'I am from Props1 Component',
            btn:false
        }
    }

    // componentWillMount(){
    //     this.setState({username:'hello'})
    // }

    // componentDidMount(){
    //     if(this.props.value=='No props')
    //     this.setState({btn:false})
    // }

    handleChange=(e)=>{
        this.setState({username : e.target.value});
    }

    handleClick=(e)=>{
        this.setState({btn : true})
    }


render(){
    
    return(
        <div>
            <label>Enter name</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <button onClick={this.handleClick} className="btn-success">SUBMIT</button>

            {/* <MyProps2 value11={this.state.username}></MyProps2> */}

            {this.state.btn ? <MyProps2 value11={this.state.username}></MyProps2> : ''}
           
            {/* <MyProps2 value11={this.state.message}></MyProps2> */}
            {/* <label>Running Component 1</label><br></br> */}
            {/* <label>Message from Component Props2</label>&nbsp;&nbsp; */}
            {/* <p> {this.props.value}</p> */}


        </div>
    );
}
}

export default MyProps1;