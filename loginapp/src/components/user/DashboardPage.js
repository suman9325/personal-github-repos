import React from "react";
import "../user/Dashboard.css";

class DashboardPage extends React.Component {
    state = {
    }

    componentDidMount(){
        if (localStorage.getItem("resData") !== null) {
            // localStorage.removeItem('resData');
        }else{
            //this.props.history.push('/Login');
        }
    }

    render() {
        return (
            
            <div>
                <p>username: </p>
                <p>email:</p>
            </div>
        );
    }
}

export default DashboardPage;