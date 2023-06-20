import React from 'react';
import {Provider} from 'react-redux';
import Welcome from './src/screen/Welcome';
import {store} from './src/redux/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
};

export default App;
