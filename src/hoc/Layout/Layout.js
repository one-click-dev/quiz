import React, { useState } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

function Layout({ children }) {

    const [menu, setMenu] = useState(false);

    return (
        <div className={classes.Layout}>
            <Drawer
                isOpen={menu}
                onClose={() => setMenu(false)}
            />
            <MenuToggle
                onToggle={() => setMenu(!menu)}
                isOpen={menu}
            />
            <main>
                {children}
            </main>
        </div>

    )
}

export default Layout