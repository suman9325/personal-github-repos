import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Artists from './Artists';

const Artists = lazy(() => import('./Artists'))

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* <Artists /> */}
                <Suspense fallback={<h1>Still Loading…</h1>}>
                    <Artists />
                </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
