import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from "@material-ui/icons/Search"
import HelpIcon from '@material-ui/icons/Help';
import {useStateValue} from "./StateProvider"
function Header() {
    const [{user}] = useStateValue()

    return (
        <div className ="header">
            <div className="header__left">
                {/*Avatar for logged in User */}
                <Avatar 
                className = "header__avatar"
                alt = {user?.displayName}
                src = {user?.photoURL}

                />
                <AccessTimeIcon/>
                {/*Time Icons */}
            </div>

            <div className="header__search">
                {/*Searcg icon */}
                <SearchIcon/>
                {/*Input */}
                <input/>
            </div>

            <div className="header__right">
                {/*Help Icon */}
                <HelpIcon/>
            </div>

        </div>
    )
}

export default Header
