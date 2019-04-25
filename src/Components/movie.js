import React, { Component } from 'react';
import DataForm from './form';
import { firebaseDB, firebase, googleAuth } from '../firebaseDb';
import Home from './home';




class Movie extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            email: "",
            long:"",
            lat:"",
            weathLocate: [],
            crimeNum: 0,
            isReport: false,
            isLogin: false
 
    }

}
    
    componentDidMount(){

        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                isLogin: user? true: false
            })
           })
            fetch("https://www.google.com/maps/embed/v1/MODE?")  // Unable to get the Googlemap Api key billing setup
                .then(response => response.json()
                    .then(data =>{
                        this.setState({
                            weatherLocate: data
                        })
                    })
                )
    

    } 


    handleForm = (event)=>{
        const { name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        firebaseDB.ref('users').push(data)
        .then(()=>{
            console.log('new user added');
        })
        this.setState({isReport: true})
        this.setState({
            firstName: "",
            email: ""

        })

      
        this.setState(prevState =>{ 
            return{
             crimeNum: prevState.crimeNum + 1
            } 
         }
     )

    }

    login = ()=>{
        
       firebase.auth().signInWithPopup(googleAuth);
             
    }

    signOut = () =>{
        firebase.auth().signOut();
        this.setState({
            isLogin:false
        })
    }

    
  
  


    render(){

        const dataItem = this.state;

        const dataValue = <DataForm
            formd ={dataItem} handleform={ this.handleForm}
            handlesubmit= {this.handleSubmit} signout={this.signOut}
            />

      //  const dataValue = this.state.weathLocate.map(item => <inpForm key={item.id} items={item} 
       //     formD ={dataItem} handleForm={ this.handleForm}
       //     handleSubmit= {this.handleSubmit}
       //     handleCrime = {this.handleCrime}
       //     />) ;

           const access =this.state.isLogin? dataValue :  <Home login={this.login} />  ;
        return(

           <div>

              { access}

            </div>
        )
    }

}

export default Movie