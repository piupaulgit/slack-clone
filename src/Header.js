import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutlined, Search } from '@material-ui/icons';
import React from 'react';
import './Header.css'
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}/>
                <AccessTime></AccessTime>
            </div>
            <div className="header__search">
                <Search></Search>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="header__right">
                <HelpOutlined></HelpOutlined>
            </div>
        </div>
    )
}

export default Header
