import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    state = {
        id: 123,
        dept: 'Math'
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/addform">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/view">Page 2</Link>
                    </li>
                    {/* <li>
                        <Link to={{ pathname: '/component3/' + this.state.id }} >Page 3</Link>
                    </li> */}
                    <li>
                        <Link to={{ pathname: '/component3' , user_id:this.state.id, user_dept: this.state.dept }} >Page 3</Link>
                    </li>

                    {/* <li>
                        <Link to={{
                            pathname: '/component3',
                            user_details: {
                                user_id: this.state.id,
                                user_dept: this.state.dept
                            }
                        }} >Page 3</Link>
                    </li> */}

                </ul>
            </div>
        );
    }
}

export default Menu;