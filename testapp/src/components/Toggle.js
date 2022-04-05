import React from 'react';

class MyToggle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          
          currentState: true
        };
      }

      handleToggle = () => {
        this.setState({
            currentState: !this.state.currentState
        });
      };



      render() {

        return (
          <div className="App-body">
            <button type="button"  onClick={this.handleToggle} >
              {this.state.currentState ? " Login" : " Log Out"}
            </button>
          </div>
        );
      }
}

export default MyToggle;