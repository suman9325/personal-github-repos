import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

    render() {
        return (
            <div className="container m-b-30">
                <div className="text-center">
                    <Link to='/signup'>
                        <button className="btn btn-primary btn-lg donealert m-b-10" type="submit" name="submit">Sign Up</button>
                    </Link>
                    <Link to='/login'>
                        <button className="btn btn-primary btn-lg donealert m-b-10" type="submit" name="submit">Login</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Welcome;