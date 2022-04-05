import React from 'react';

let timer = null
class Third extends React.Component {

    constructor() {
        super()
        this.state = {
            user_id: '',
            user_name: ""
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // if(prevProps.location.user_details.user_name !== this.props.location.user_details.user_name){

        // }
        // else{

        // }

        if (prevState.user_name !== this.state.user_name) {
            alert('Updated')
        }
        else {
            alert('Not Updated')
        }
    }

    componentDidMount() {
        // this function loaded by deault like body onload

        // Method = 2
        // alert(this.props.location.id1);
        // alert(this.props.location.id2);

        // if(this.props.location.id1){
        //     this.setState({user_id: this.props.location.id1})
        // }
        // else{
        //     this.props.history.push('/')
        // }

        // Method = 3
        // alert(this.props.match.params.eid);    //in case of query string

        // Method = 4

        if (this.props.location.user_details) {
            this.setState({ user_name: this.props.location.user_details.user_name })
        }
        else {
            this.props.history.push('/')
        }

        timer = setInterval(() => {
            console.log('aaaaa');
        }, 1000);

    }

    componentWillUnmount() {
        clearInterval(timer)
    }



    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Welcome to Third Component</h1>
                    <p>User Name : {this.state.user_name}</p>
                </div>
            </React.Fragment>

        );
    }
}

export default Third;