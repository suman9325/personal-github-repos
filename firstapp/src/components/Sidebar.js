import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
class Sidebar extends React.Component {
    render() {
        return (
            <>
                <div style={{ width: "fit-content", float: "left", marginRight: "5%" }}>
                    <NavLink to="/dashboard" exact activeStyle={{ color: "red" }}>Dashboard</NavLink>
                    <br />
                    <NavLink to="/page1" exact activeStyle={{ color: "red" }}>Page 1</NavLink>
                    <br />
                    <NavLink to="/page2" exact activeStyle={{ color: "green" }}>Page 2</NavLink>
                    <br />
                    <NavLink to="/page3" exact activeStyle={{ color: "black" }}>Page 3</NavLink>
                    <br/>
                </div>
            </>
        );
    }
}

export default withRouter(Sidebar);