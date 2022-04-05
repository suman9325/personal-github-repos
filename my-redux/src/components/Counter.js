import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count:0}
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            
            count:this.state.count-1
        });
    }
    render() {
        return (
            <div>
                <h2>My Counter</h2>
            
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                </div>
            </div>
            )
    }
}

export default Counter;