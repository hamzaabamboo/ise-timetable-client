import 'material-components-web/dist/material-components-web.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';
import store from './store';
import { RMWCProvider } from 'rmwc/Provider';

ReactDOM.render(
	<RMWCProvider>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</RMWCProvider>,
	document.getElementById('root')
);
registerServiceWorker();
