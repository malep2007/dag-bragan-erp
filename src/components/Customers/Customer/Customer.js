import React from 'react';
import classes from './Customer.css'

const customer = () => (
	<div className={classes.Customer}>
		<h4>Customer Name</h4>
		<div>
			<label>Location: </label> <label>Unknown</label>
		</div>
		<div>
			<label>Job Type: </label> <label>Unknown</label>
		</div>
		<div>
			<label>Phone Number: </label> <label>Unknown</label>
		</div>
	</div>
)

export default customer;
