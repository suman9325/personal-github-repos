import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    constructor() {
        super()
    //   this.state = {
    //         id: 1,
    //         name: "",
    //         address: "kolkata"
    //     }
    }

    state={
        id: "",
        name:"test",
        password:"123",
        user_name:"",
        user_password:""
    }

    handleChange=(e)=>{
        this.setState({name: e.target.value})
    }

    
    render() {
        return (
            <>
                <div>
                    <ul>
                        {/* Method = 1, No change in Route */}
                        {/* <li>
                            <Link to="/first-component">First Component</Link>
                        </li>
                        <li>
                            <Link to="/second-component">Second Component</Link>
                        </li> */}
                        <li>
                            {/* Method = 2, No change in Route */}

                            {/* <li><Link to={{ pathname: "/third-component", id1: 2, id2: 34 }}><i className="fa fa-circle-o"></i>Third</Link></li> */}

                            {/* Method = 3, Changes in Route */}

                            {/* <li><Link to={{ pathname: "/third-component/" + this.state }}><i className="fa fa-circle-o"></i>Third</Link></li> */}

                            {/* Method = 4, No change in Route */}

                            <li>
                                <Link to={{
                                    pathname: '/third-component',
                                    user_details: {
                                        user_id: this.state.id,
                                        user_name: this.state.name
                                    }
                                }} >Third</Link>
                            </li>
                        </li>
                    </ul>

                    <input type="text" onChange={this.handleChange}/>
                    <br />
                    <button><Link to={{pathname: '/third-component', user_details:{user_name:this.state.name}}}>Click Me
                    </Link></button>
                </div>
            </>
        )
    }

}

export default Home;