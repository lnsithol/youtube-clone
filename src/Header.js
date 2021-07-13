import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.css'
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title ='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title ='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title ='Job'/>
                <HeaderOption Icon={ChatIcon} title ='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title ='Notifications'/>
                <HeaderOption onClick={logoutOfApp} avatar='true' title='me' />
            </div>
        </div>
    )
}

export default Header
