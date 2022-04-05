import React from 'react';

class Component3 extends React.Component {

    state={
        p_user_id:'',
        p_user_dept:''
    }

    componentDidMount(){
        // if(!this.props.location.user_details){
        //     // alert('No props')
        //     console.log('No props');
        // }
        // else{
        //     this.setState({ p_user_id : this.props.location.user_details.user_id, 
        //         p_user_dept: this.props.location.user_details.user_dept})
        // }
    }

    componentWillReceiveProps(prevProps){
        if(prevProps.user_id != this.props.location.user_id){
            alert('No update in props')
        }
        else{
            alert('Props has updated')
        }
    }

    componentDidUpdate(prevState, prevProps){
        // if(prevState.p_user_id == this.state.p_user_id){
        //     alert('No update in state')
        // }
        // else{
        //     alert('State has updated')
        // }

        
    }

    checkUserLogin(){
        setInterval(() => {
            
        }, 2000);
    }

    componentWillUnmount(){
        this.checkUserLogin()
    }

    render() {
        return (
            <div>
                <label>Props = </label>
                {/* {this.props.match.params.id123} */}
                
                {/* {this.props.location.user_id} */}

                {/* {this.state.p_user_id}
                <br/>
                {this.state.p_user_dept} */}
            </div>
        );
    }
}

export default Component3;