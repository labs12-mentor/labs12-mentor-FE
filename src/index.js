import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';
import LogoHz from './assets/img/MM-logo-hz [HQ].png';


ReactDOM.render(
    <Provider store={store}>
        <Routes history={history} />
        <footer style={{display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '30px'}}>
            <img src={LogoHz} alt="MM logo wide" height="75" width="75" />
        </footer>

    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
