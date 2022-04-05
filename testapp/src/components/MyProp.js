import React from "react";

class PropEx extends React.Component {

    constructor() {
        super();
        this.state = {
            propsValue: ''
        }
    }

    componentDidMount() {
        this.setState({ propsValue: this.props.val })
    }


    render() {
        return (
            <div>
                Welcome user = {this.state.propsValue}<br></br>
                {this.props.val}

                {this.props.val == 'Hi India' &&
                    <label>Hello India</label>
                }

                {this.props.val == 'Hi World' &&
                    <label>Hello World</label>
                }


            </div>
        );
    }


}



export default PropEx;