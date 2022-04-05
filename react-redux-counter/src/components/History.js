import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class History extends Component {
  render() {    
    return ( 
      <div> 
        <h1> History </h1>
        <ul>
          {this.props.history.map((item, index) => (<li key={index}> {item} </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    history: state.counter.history,
  }
}

export default connect(mapStateToProps)(History);