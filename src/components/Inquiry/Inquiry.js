import React from 'react';
import classes from './Inquiry.css'
import { Link, Route } from 'react-router-dom';
import CustomerInquiry from './CustomerInquiryForm/CustomerInquiryForm';

const inquiry = () => (
	<div className={classes.Inquiry}>
		<h2>Inquiry</h2>
		<ul>
			<li>
				<Link to="/customer/inquiry/new">New Inquiry</Link>
			</li>
		</ul>
		<Route path="/customer/inquiry/new" component={CustomerInquiry}/>
	</div>
)

export default inquiry;
