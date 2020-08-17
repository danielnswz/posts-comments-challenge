import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from '../../store';
import CustomRouter from '../../routes';

const App = () => {
	return (
		<Provider store={store}>
			<CssBaseline />
			<CustomRouter />
		</Provider>
	);
};

export default App;
