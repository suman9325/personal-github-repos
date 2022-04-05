import React from 'react';

class DefaultVal extends React.Component{


    render(){
        return(
            <div>
                Welcome {this.props.name} <br></br>
                default user is {this.state.name1}
            </div>
        );
    }
}

DefaultVal.defaultProps = {
    name: 'Mary'
  };

  DefaultVal.getInitialState = {
    name1: 'User'
  };


export default DefaultVal;