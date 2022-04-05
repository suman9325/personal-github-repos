import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actiontype from './ReduxAction';

class ReduxComp1 extends Component{
    constructor(props){
        super(props);
        this.state={
            no:0,
            
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.count !== this.props.count) {
            this.setState({no: this.props.count}, ()=>{
                console.log("state", this.state.no);    
            })
        } else {
            console.log("##");
        }
    }

    render(){
        return(
            <React.Fragment>
              <h1>Increase or Decrease data number :{this.state.no}</h1> 
              <p>{this.props.stateMessage}</p>
              <button onClick={this.props.increaseData}> Increase </button>
              <button onClick={this.props.decreaseData}> Decrease </button>
            </React.Fragment>
        
        );
    }
}

const mapStateToProps= state =>{
    return{
        count: state.counterReducer.reducer_data ,
        stateMessage: state.messageReducer.reducer_msg || state.messageReducer.state.reducer_msg
    };
    
}

const mapDispatchToProps = dispatch =>{
   return{
    increaseData:(no)=>dispatch({type:Actiontype.INCREASE_DATA,data:no}),
    decreaseData:(no)=>dispatch({type:Actiontype.DECREASE_DATA,data:no})
   };
}

export default connect(mapStateToProps,mapDispatchToProps ) (ReduxComp1);