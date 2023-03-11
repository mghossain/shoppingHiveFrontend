import React from 'react';
import { NavLink }
    from "./SidebarElements";

const Sidebar = () => {
    return (
        <aside className="w-48 flex-shrink-0">
            <ul>
                <NavLink to="/" activeStyle>
                    All Products
                </NavLink>
                <NavLink to="/cart" activeStyle>
                    Shopping Cart
                </NavLink>
                <NavLink to="/sales" activeStyle>
                    Sales Statistics
                </NavLink>
            </ul>
        </aside>
    );
};

export default Sidebar;