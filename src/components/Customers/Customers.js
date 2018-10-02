import React from 'react';
import classes from './Customers.css'
import Customer from './Customer/Customer';

const customers = (props) => (
	<div className={classes.Customers}>
		<h3>Customers</h3>
		<Customer/>
		<Customer/>
	</div>
)

export default customers;
