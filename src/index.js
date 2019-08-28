import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/core/App';
import 'antd/dist/antd.css'; 
import store from './components/store/store';
import { Provider } from 'react-redux'

const nodes = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(nodes, document.getElementById('root'));
