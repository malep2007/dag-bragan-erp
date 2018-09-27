import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './Login.css';


const loginForm = (props) => (
    <Aux>
        <form className={classes.Login}>
            <div>
                <label>Username</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </Aux>
);

export default loginForm;
