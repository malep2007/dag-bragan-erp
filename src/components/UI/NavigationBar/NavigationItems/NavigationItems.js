import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'


const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <h3>Dag & Bragan</h3>
        <NavigationItem>View Customers</NavigationItem>
        <NavigationItem>Make Customer Inquiry</NavigationItem>
    </ul>
)

export default navigationItems