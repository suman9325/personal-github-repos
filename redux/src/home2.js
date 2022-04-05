import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home2 extends Component {
    state = {
        counter:0,
        fields:{
            name:'xyz',
            class:'a',
            roll:''
        },
        form_data:[]
    }

    showCounter=()=>{
        this.setState({counter: this.props.stateData})
    }

    // componentDidMount(){
    //     setInterval(this.showCounter, 1000)
    //     let index = {...this.state.fields}
    //     // [...this.state.form_data]
    //     // index.roll=3
    //     // this.setState({fields:index})
        
    // }

    // componentWillUnmount(){
    //     clearInterval(this.showCounter)
    // }

    render() {
        return (
            <React.Fragment>
                <br /><br /><br />
                {/* <button onClick={this.showCounter}>SHOW</button> */}
                <h1>Counter value : {this.props.stateData}</h1>
            </React.Fragment>
        );
    }
}

const mapStateToProps= state =>{
    console.log('state11');
    
    return{
        
        stateData:state.reducer_data
    };
    
}

export default  connect(mapStateToProps) (Home2);