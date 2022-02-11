import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navigation.module.css'
import logo from '../images/logo.png'
const Navigation = () => {

    return (
        <nav className={classes.nav}>

            <ul><li><Link to='/'><img src={logo} alt="logo"/></Link></li>
                <li><Link to='/login'>Logowanie</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li>
                <li><Link to='/products'>Produkty</Link></li>
                <li className={classes.li}><Link to='/'>Start</Link></li>
            </ul>


        </nav>
    );
};

export default Navigation;