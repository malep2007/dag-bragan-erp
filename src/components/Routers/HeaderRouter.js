import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Customers from '../Customers/Customers';
import Inquiry from '../Inquiry/Inquiry';

import classes from './HeaderRouter.css'

const HeaderRouter = () =>(
	<Router>
		<div className={classes.HeaderRouter}>
			<h2>
				Dag & Bragan
			</h2>
			<ul>
				<li>
					<Link to="/cutomers">Customers</Link>
				</li>
				<li>
					<Link to="/inquiries">Inquiries</Link>
				</li>
			</ul>

			<Route exact path="/customers" component={Customers} />
			<Route path="/Inquiries" component={Inquiry } />
		</div>
	</Router>
)

export default HeaderRouter
