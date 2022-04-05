import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();

        this.state={
             k : 0
        }
    }
        stepCounter=(e,val)=>{
            if(val == 1)
                this.increment(1);
            else if(val == -1)
                this.decrement(-1);
            else
                this.getValue();
        }

        increment(val){
            let k = this.state.k;
            k++;
            this.setState({k : k})
        }

        decrement(val){
            let k = this.state.k;
            k--;
            this.setState({k : k})
        }

        getValue(){
            return this.state.k;
        }
        
    
    render(){
        return(
            <div>
                <h6>
                    Step Counter
                </h6>
                <button className="success" onClick={(e)=>this.stepCounter(e,1)}>+</button>&nbsp;&nbsp;&nbsp;
                {this.state.k} &nbsp;&nbsp;&nbsp;
                <button className="danger" onClick={(e)=>this.stepCounter(e,-1)}>-</button>&nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default Counter;