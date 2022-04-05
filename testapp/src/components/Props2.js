import React from 'react';
import MyProps1 from './Props1';

class MyProps2 extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'I am from Props2 Component',
            err_msg: ''
        }
    }

    componentDidMount() {
        if (!this.props.value11) {
            this.setState({ err_msg: 'No props' }, () => {
                console.log(this.state.err_msg)
            })
        }
        else {
            this.setState({ err_msg: '' }, () => {
                console.log(this.state.err_msg)
            })
        }
    }

    render() {
        return (
            <div>
                {/* <MyProps1 value={this.state.message}></MyProps1> */}
                <label>Running Component 2</label><br></br>
                <label>Message from Component Props1</label>&nbsp;&nbsp;
                <p>{this.state.err_msg == '' ?
                    this.props.value11
                    :
                    this.state.err_msg
                }</p>

                {/* {this.state.err_msg == '' ?
                    <p>{this.props.value11}</p>
                    :
                    <p><MyProps1 value={this.state.err_msg}></MyProps1>
                        {this.state.err_msg}
                    </p>
                } */}

            </div>
        );
    }
}

export default MyProps2;