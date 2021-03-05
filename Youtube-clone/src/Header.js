import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
            </div>
            <div className="header__input">
                <input type="text" placeholder='Search'/>
                <SearchIcon className='header__inputButton'/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar className='header__icon' alt='Nikhil' src='https://avatars.githubusercontent.com/u/71940958?s=460&u=24ef1c10f91e5ef2dffac627465b825a9fef769a&v=4'/>
            </div>
        </div>
    )
}

export default Header
