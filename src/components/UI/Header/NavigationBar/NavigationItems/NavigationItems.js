import React from 'react';
//import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customers from '../../../../Customers/Customers';
import Inquiry from '../../../../Inquiry/Inquiry'


const navigationItems = (props) => {
	return (
		<Router>
			<div>
				<ul className={classes.NavigationItems}>
					<h3>Dag & Bragan</h3>
					<li>
						<Link to="/customer/view/">View Customers</Link>
					</li>
					<li>
						<Link to="/customer/inquiry">Make Inquiry</Link>
					</li>
				</ul>
				<Route path="/customer/view/" component={Customers} />
				<Route path="/customer/inquiry/" component={Inquiry} />
			</div>
		</Router>
	)
}


export default navigationItems
