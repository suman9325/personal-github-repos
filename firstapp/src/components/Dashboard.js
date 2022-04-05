
import React from "react";
import { withRouter } from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>Welcome to Dashboard</h1>
                </div>


            </>
        );
    }
}

export default withRouter(Dashboard);