import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,hashHistory,IndexRoute } from 'react-router';
import './index.css';
import './pages/font/iconfont.css';
import App from './App';
import Job from './pages/Job';
import User from './pages/User';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Job}/>
			<Route path="User" component={User}/>
			<Route path="Search" component={Search}/>
		</Route>
		<Route path="/Login" component={Login}/>
		<Route path="/Register" component={Register}/>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
