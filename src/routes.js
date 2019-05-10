import React from 'react';
import {  Switch } from 'react-router-dom';
import Home from './Components/Home/home'
import NewArticle from './Components/Articles/News/Post/index';
import Layout from './hoc/Layout/layout';
import VideoArticle from './Components/Articles/Videos/Video/index'
import NewsMain from './Components/Articles/News/NewsMain/newsMain';
import VideoMain from './Components/Articles/Videos/videoMain';
import SignIn from './Components/signin/signin';
import DashBoard from './Components/Dashboard/dashboard';
import PrivateAuthRoute from './Components/AuthRoute/privateAuthRoutes';
import PublicAuthRoute from './Components/AuthRoute/publicAuthRoutes';



const Routes = (props) => {

        return(
            <Layout user={props.user}>
             <Switch>
                <PublicAuthRoute {...props}  restricted = {false} path="/" exact component={Home} />
                <PublicAuthRoute {...props}  restricted = {false} path="/news" exact component={NewsMain} />
                <PublicAuthRoute {...props}  restricted = {false}path="/articles/:id" exact component={NewArticle} />
                <PublicAuthRoute {...props}  restricted = {false} path="/videos/:id" exact component={VideoArticle} />
                <PublicAuthRoute {...props}  restricted = {false} path="/video" exact component = {VideoMain} />
                <PublicAuthRoute {...props} restricted={true} path="/sign-in" exact component = { SignIn} />
                <PrivateAuthRoute {...props} path="/dashboard" exact component= { DashBoard} />
            </Switch>

            </Layout>
           

        )
    
}

export default Routes;