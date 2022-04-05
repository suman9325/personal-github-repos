import React from 'react';
import Form from './addForm.js';

class All extends React.Component {
   
    state={
        roll:2
    }
   
    componentDidMount(){       
     // this function loaded by deault like body onload
    //  alert(this.props.location.id1);
    //  alert(this.props.location.id2);
    //  alert(this.props.match.params.id);    //in case of query string
    
    }

    componentDidUpdate(prevProps, prevState){
        // if(prevProps.location.id1 != this.props.location.id1){
        //     alert('props id updated')
        // }
        // else{
        //     alert('props id not updated')
        // }
        if(prevState.roll != this.state.roll){
            alert('state updated')
            }
            else{
                alert('state not updated')
            }
        
    }

   changeValue=(e)=>{
       this.setState({roll: e.target.value})
   }
   
   
    render() {
      
        return (
            <React.Fragment>
            <section>
            {/* <Form {...this.props}/> */}
            </section>
            <section>
            
            <div className="content">
                <form action="">
                    <div className="card">
                        <div className="card-header">
                            <h4>Welcome</h4>
                            
                        </div>
                        
                           
                        
                    </div>
                </form>
                <input type="text" name="roll" onChange={this.changeValue}></input>
                {/* <input type="button" onClick={this.changeValue}></input> */}
            </div>
    </section>

    </React.Fragment>
        );
    }   
  }
           
           
export default All;