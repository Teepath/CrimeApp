import React, { Component } from 'react';
import inpForm from './form';
import { Firebase, firebase } from 'firebase';
import "../firebaseDB";
import Home from './home';




class Movie extends Component{
    constructor(){
        super();
        this.state = {
            firstname: "",
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
            fetch("htttp://googleweatherapi")
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

    handleClick = (event) => {
        event.preventDefault();
        let data = this.state;
        Firebase.database()
        .set(data);
        this.setState({isReport: true})

    }

    login = ()=>{
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomerParameter();
        this.setState({
            isLogin: true
        })
    }

    
    handleCrime = () =>{

        if(this.state.isReport){
            this.setState(prevState => 
                {
                    crimeNum: prevState.crimeNum + 1
                }
            )
        }

    }

  


    render(){

        const dataItem = this.state;

        const dataValue = this.state.weathLocate.map(item => <inpForm key={item.id} items={item} 
            formD ={dataItem} handleForm={ this.handleForm}
            handleClick= {this.handleClick}
            handleCrime = {this.handleCrime}
            />) ;

           const access =this.state.isLogin? dataValue :  <Home login={this.login} />  ;
        return(

           <div>

              { access}

            </div>
        )
    }

}

export default Movie