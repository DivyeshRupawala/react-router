import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App/App';
import Home from './Home/Home'
import AboutUs from './AboutUs/AboutUs'

export default class RouterMapping extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home} />
					<Route path="/Home" component={Home} />
					<Route path="/About" component={AboutUs} />
				</Route>	
			</Router>
		)
	}
}
