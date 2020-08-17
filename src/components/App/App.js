import React from 'react';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../../routes/About';
import Home from '../../routes/Home';
import store from '../../store';
import Footer from '../Footer';
import Header from '../Header';
import PublicationDetail from '../../routes/PublicationDetail';

const sections = [
	{ title: 'Home', url: '/' },
	{ title: 'About', url: '/about' },
];
const footerDescription = `You are in a **${process.env.REACT_APP_ENV_NAME.toLocaleLowerCase()}** version of this app.`;

const App = () => {
	return (
		<Provider store={store}>
			<CssBaseline />
			{/* Note: this router can be moved to another component dedicated to routing.... */}
			<Router>
				<Container fixed>
					<Header title='Sweatworks Challenge' sections={sections} />
					<Switch>
						<Route path='/publication/:id'>
							<PublicationDetail />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
					<Footer description={footerDescription} />
				</Container>
			</Router>
		</Provider>
	);
};

export default App;
