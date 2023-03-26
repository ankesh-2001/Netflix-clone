import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Navbar.css';
import { useState } from 'react';
import { Link } from "react-router-dom";



export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link to="/" className="link">
                        <span className="leftspan">Homepage</span>
                    </Link>
                    <Link to="series" className="link">
                        <span className="leftspan">Series</span>
                    </Link>
                    <Link to="movies" className="link">
                        <span className="leftspan">Movies</span>
                    </Link>


                    <span className="leftspan">New and Popular</span>
                    <span className="leftspan">My List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"></SearchIcon>
                    <span>KID</span>
                    <NotificationsIcon className="icon"></NotificationsIcon>
                    <div className="profile">
                        <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
                        <div className="options">
                            <span>settings</span>
                            <span>Log out</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
