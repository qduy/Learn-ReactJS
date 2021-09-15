import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';

const menus = [
    {
        to: '/',
        activeOnlyWhenExact: true,
        label: 'Trang chu'
    },
    {
        to: '/about',
        activeOnlyWhenExact: true,
        label: 'About'
    },
    {
        to: '/contact',
        activeOnlyWhenExact: true,
        label: 'Contact'
    },
    {
        to: '/products',
        activeOnlyWhenExact: true,
        label: 'Product'
    },
    {
        to: '/login',
        activeOnlyWhenExact: true,
        label: 'Login'
    }

]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={
                ({ match }) => {
                    var active = match ? 'active' : '';
                    return (
                        <li className={active}>
                            <NavLink to={to}>
                                {label}
                            </NavLink>
                        </li>
                    )
                }
            }

        />
    )
}

class Menu extends Component {

    showMenu = (menus) => {
        var result = null;
        result = menus.map((menu, index) => {
            return (
                <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.activeOnlyWhenExact} />
            )
        })
        return result;
    }

    render() {
        return (
            <div >
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">

                        {this.showMenu(menus)}

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
