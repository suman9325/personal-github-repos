import React from 'react'
import PropTypes from 'prop-types';

class PropsValid extends React.Component {

    render(){
        return(
            <>
            props- {this.props.userIds}
            <br />
            {this.props.userIds ? "true" : "False"}

            <br /><br /><br /><br /><br /><br />
            {this.props.propArray}
            {this.props.propArray ? "true" : "False"}
            </>
        )
    }
}

PropsValid.propTypes = {
    // userIds: PropTypes.array.isRequired,
    propArray: PropTypes.array.isRequired,
    // propBool: PropTypes.bool.isRequired,
    // propFunc: PropTypes.func,
    // propNumber: PropTypes.number,
    // propString: PropTypes.string,
}

PropsValid.defaultProps = {
    propArray: 1,
    // propBool: true,
    // propFunc: function (x) { return x * 10 },
    // propNumber: 1,
    // propString: "GFG",
  }

export default PropsValid;