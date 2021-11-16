import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
    { path: "/", name: "Home"},
]

const Menu = () => {
    return (
        <div className="row">
            <div className="co1-md-12 app pb-4 mb-2">
                <ul className="nav nav-pills">
                    {menuItems.map(m => (
                        <li className="nav-item" key={m.path}>
                            <NavLink className="nav-link" to={m.path}>
                                {m.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu;