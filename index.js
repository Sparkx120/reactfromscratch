import React  from 'react';
import { Router, Route } from 'react-router';
import { render } from 'react-dom';

//Import Components here
import App from './components/App.jsx';

render((
	<div>
		<Router>
			<Route path="/" component={App}></Route>
		</Router>
	</div>
), document.getElementById('react'));
