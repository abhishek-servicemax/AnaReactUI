import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
//import { browserHistory} from 'react-router-dom';

import {Provider} from "react-redux";

import store from "../store";
import routes from "../route";


ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory} routes={routes}/>
		</Provider>,
		document.getElementById('root')
		);
//registerServiceWorker();

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
