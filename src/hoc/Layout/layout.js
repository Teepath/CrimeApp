import React, { Component } from 'react';

import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import "./layout.css";


class Layout extends Component {
    constructor(){
        super()
        this.state = {
            showNav: false
        }
    }
    

    toggleSideNav = (action) =>{

        this.setState({
            showNav: action
        })

    }

    render(){
        return(
            <div>
                <Header
                onHideNav={() => this.toggleSideNav(false)}
                onOpenNav = {() => this.toggleSideNav(true)}
                onShowNav ={this.state.showNav}
                user = {this.props.user}
               
               />   
               
               {this.props.children}

                    <Footer />
            </div>
        )
    }
}

export default Layout;