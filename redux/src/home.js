import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actiontype from './Action';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            no:0,
            
        }
    }

    increaseHandler=()=>{
       this.props.increaseData(this.state.no);
       this.setUpdatedState();
    }

    setUpdatedState=()=>{
        if(this.props.stateData){
            this.setState({no:this.props.stateData});
              console.log(this.state.no);
        }  
    };

    decreaseHandler=(e)=>{
        console.log(this.state.no);
        this.props.decreaseData(this.state.no);
        //console.log(this.props.stateData);
       
        this.setUpdatedState();
        
    }

    

    render(){
        return(
            <React.Fragment>
              <h1>Increase or Decrease data number :{this.state.no}</h1> 
              <button onClick={this.increaseHandler}> Increase </button>
              <button onClick={this.decreaseHandler}> Decrease </button>
            </React.Fragment>
        
        );
    }
}

const mapStateToProps= state =>{
    console.log('state');
    
    return{
        
        stateData:state.reducer_data,

    };
    
}

const mapDispatchToProps = dispatch =>{
    console.log('dispatch');
   return{
    increaseData:(no)=>dispatch({type:Actiontype.INCREASE_DATA,data:no}),
    decreaseData:(no)=>dispatch({type:Actiontype.DECREASE_DATA,data:no})
   };
}

export default connect(mapStateToProps,mapDispatchToProps ) (Counter);