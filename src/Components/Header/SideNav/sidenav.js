import React from 'react';
import { SideNav }  from 'react-simple-sidenav';
import SideNavItems from './sideNav_item';





const SideNavigation = (props) => {

    return (
        <div >
            <SideNav 
             showNav={props.onShowNav}
             onHideNav = {props.onHideNav}
             
             navStyle={
                 {background:"#242424",
                 maxWidth: '200px',
                 color: 'white'
             }}  >

             <SideNavItems {...props}/>
             </SideNav>
            

        </div>
    )
}

export default SideNavigation;