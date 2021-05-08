import React from 'react'
import "../css-component/Header.css"
import logo from "../images/logo.png"
import SearchIcon from '@material-ui/icons/Search';
import {Avatar, IconButton} from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PaletteIcon from '@material-ui/icons/Palette';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MicIcon from '@material-ui/icons/Mic';
import { useStateValue } from "./StateProvider"


function Header() {
    const [ {user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left"></div>
                <img className ="logo" src={logo} alt="logo"/>
                
                <div className="header__option">
                    <MusicNoteIcon />
                    <h4>Music</h4>
                </div>
                <div className="header__option">
                    <PaletteIcon />
                    <h4>Art</h4>
                </div>
                <div className="header__option">
                    <SportsEsportsIcon />
                    <h4>Game</h4>
                </div>
                <div className="header__option">
                    <LocalDiningIcon />
                    <h4>Food</h4>
                </div>
                <div className="header__option">
                    <MicIcon />
                    <h4>Podcast</h4>
                </div>
            <div className="header__center"></div>

            <div className="header__right">
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" className="text" placeholder="Find a creator"/>
                </div>
                <div className="header__option">
                    <QuestionAnswerIcon />
                </div>
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                
            </div>
        </div>
    )
}

export default Header
