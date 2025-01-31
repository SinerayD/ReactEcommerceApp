import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge'
import { useSelector } from 'react-redux';

const Header = () => {
    const [theme, setTheme] = useState(false);

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");

        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    };

    return (
        <div
            className="header-container"
            style={{
                background: theme
                    ? "linear-gradient(90deg, #4CAF50, #3b8d40)"
                    : "linear-gradient(90deg, #1e1e1e, #2a2a2a)",
                boxShadow: theme
                    ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                    : "0px 4px 10px rgba(0, 0, 0, 0.6)",
                borderBottom: theme ? "none" : "1px solid #444",
                color: theme ? "#fff" : "#ddd",
            }}
        >
            < div onClick={() => navigate('/')} className="logo-section" >
                <img className="logo" src="./src/images/logo.avif" alt="DayDay Logo" />
                <p className="logo-text">DayDay Limited</p>
            </div >
            <div className="search-icons-section">
                <input className="search-input" type="text" placeholder="Search for products..." />
                <div className="icons">

                    {theme ? (
                        <FaMoon className="icon" onClick={changeTheme} />
                    ) : (
                        <CiLight className="icon" onClick={changeTheme} />
                    )}
                </div>
                <Badge onClick badgeContent={products.length} color="primary">
                    <CiShoppingBasket className="icon" />
                </Badge>
            </div>
        </div >
    );
};

export default Header;