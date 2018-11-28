import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// Import Component 
import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import User from './components/user';
import Transition from './components/transition';





const App = () => {
	return (
		
		<BrowserRouter>


			<div className = {styles.hello} >


				<header>
					<Link to = '/'> Home</Link><br/>
					<Link to = '/post'> Post</Link><br/>
					<Link to = '/profile'> Profile</Link><br/>
					<Link to = '/user'> User</Link><br/>
					<Link to = '/transition'> Transition</Link>
					<p>Currently running react version is {React.version}</p>
				</header>
				<hr/>

				<Switch>
					<Route path = '/post' component = {Post}/>
					<Route path = '/profile/:id/:username' component = {Profile}/>
					<Route path = '/user' component = {User}/>
					<Route path = '/transition' component = {Transition}/>
					<Route path = '/' component = {Home}/>
				</Switch>
			</div>
		</BrowserRouter>

		
		
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
