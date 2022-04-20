import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Artists from './Artists';

class App extends React.Component {
    render(){
        return(
            <div className="App">
            <Artists />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
