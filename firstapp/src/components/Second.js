import React from 'react';
class Second extends React.Component {
constructor(){
    super()
    this.state = {
    }
}
    

    componentDidMount() {
        // if (this.props.uid && this.props.id) {
        //     this.setState({ newID: this.props.uid.id })
        // }
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Welcome to Second Component</h1>
                </div>
            </React.Fragment>

        );
    }
}

export default Second;