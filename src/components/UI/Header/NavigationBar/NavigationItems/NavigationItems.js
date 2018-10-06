import React from 'react';
//import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from '../../../../Customers/Customers';
import Inquiry from '../../../../Inquiry/Inquiry'
import Login from '../../../../Login/Login';


const navigationItems = (props) => {
	return (
		<Router>
			<div>
				<ul className={classes.NavigationItems}>
					<h3>Dag & Bragan</h3>
					<li>
						<Link to="/customer/view/">Customers</Link>
					</li>
					<li>
						<Link to="/customer/inquiry">Make Inquiry</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<Route path="/customer/view/" component={Customers} />
				<Route path="/customer/inquiry/" component={Inquiry} />
				<Route path="/login/" component={Login}/>
			</div>
		</Router>
	)
}


export default navigationItems
