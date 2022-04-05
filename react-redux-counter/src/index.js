import React,{PureComponent} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './components/Counter';
import History from './components/History';
import reducers from './reducers';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div style={styles}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
          <div>
            <Counter />
            {/* <History /> */}
          </div>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
