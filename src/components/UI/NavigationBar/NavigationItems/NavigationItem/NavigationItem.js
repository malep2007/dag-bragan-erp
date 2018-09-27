import React from 'react';

import classes from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href="/">{props.children}</a>
    </li>
)

export default navigationItem;