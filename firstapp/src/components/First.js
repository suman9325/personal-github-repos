import React from 'react';
import Second from './Second'

class First extends React.Component {

    constructor(){
        super()
        this.state = {
        }
    }
    

    

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Welcome to First Component</h1>
                    <Second id={1}></Second>
                </div>
            </React.Fragment>

        );
    }
}

export default First;