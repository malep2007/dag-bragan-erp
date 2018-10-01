import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './NavigationBar.css'


const navigationBar = () => (
	<div className={classes.NavigationBar}>
		<nav>
			<NavigationItems/>
		</nav>
	</div>
);
export default navigationBar
