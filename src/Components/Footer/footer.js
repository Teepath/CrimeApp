import React from 'react';
import {Link } from 'react-router-dom';
import './footer.css';
import "../../config";
import { Config_Date } from '../../config';

const Footer = ()=>{
    return (
        <footer className="footer">
            <Link to="/" className="logo">
            <img alt="nba logo" src="/images/nba-logo.png" />
            </Link>
            <div className="right">

                {Config_Date} NBA copy right

            </div>

            
        </footer>
    )
}

export default Footer;