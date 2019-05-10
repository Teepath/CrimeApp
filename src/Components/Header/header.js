import React from 'react';
import styles from '../Header/header.css';
import { Link } from 'react-router-dom';


import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sidenav';

const Header = (props) =>{


    const navBars = () =>(
        <div className="bars">
            <FontAwesome name="bars" 
            onClick ={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor: 'pointer'
                }}
            />

        </div>
    )

        const logo = () => (
            <Link  to="/" >
                 <img alt="nba logo" src="/images/nba-logo.png" style={{width:"20px", height: '30px', marginTop:"20px"}} />
            </Link>
                
        )

        return(
            <header className={styles.header}>
            <SideNav {...props} />
            <div className={styles.headerOpt}>
            {navBars()}
            </div>
            <div>
            {logo()}
            </div>
            
            </header>

        
            )

}

export default Header;