import React from 'react';
import classes from './Login.css';

const login = () => (
	<div className={classes.Login}>
		<h3>Login</h3>
		<form className={classes.Form}>
			<div className={classes.Username}>
				<label>Username:</label>
				<input type="text"/>
			</div>
			<div className={classes.Password}>
				<label>Password:</label>
				<input type="password"/>
			</div>
			<div>
				<button className={classes.Button}>Login</button>
			</div>
		</form>
	</div>
)

export default login;
