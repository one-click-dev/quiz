import React from 'react';
import classes from './Drawer.module.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop'


export default function Drawer(props) {

    //   Close Drawer
    const clickHandler = () => {
        props.onClose()
    }

    const renderLinks = () => {
        const links = [
            { to: '/leitfaden', label: 'Erste-Hilfe-Leitfaden', exact: false },
            { to: '/', label: 'Quiz', exact: true },
            { to: '/kontakt', label: 'Kontakt', exact: false },
        ]

        return (
            links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeClassName={classes.active}
                            onClick={clickHandler}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                )
            })
        )
    }

    const cls = [classes.Drawer]

    if (!props.isOpen) { // if the menu is closed
        cls.push(classes.close)
    }
    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
            {/* if menu is open, Backdrop */}
            {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
        </React.Fragment>
    )
}

