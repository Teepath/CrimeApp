import React, { Component } from 'react';
import './signin.css';

import { firebase } from '../../firebase';

import FormField from '../widgets/formFields/formFields'


class SignIn extends Component {

    state = {
        registerError:'',
        loading: false,
        formdata:{
            email:{
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: ' Enter you email'
                },
                validation: {
                    required: true,
                    email: true
                }, 

                valid: false,
                touched: false,
                validationMessage: ''
            },
            password:{
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: ' Enter you password'
                },
                validation: {
                    required: true,
                    password: true
                }, 

                valid: false,
                touched: false,
                validationMessage: ''
            }
        }

    }

    updateForm = (element)=>{

       const newFormdata = {
           ...this.state.formdata
       }

       const newElement = {
           ...newFormdata[element.id]
       }

       newElement.value = element.event.target.value;
       

       if(element.blur){
           let validData = this.validate(newElement);
           newElement.valid = validData[0];
           newElement.validationMessage = validData[1];
       }

       newElement.touched = element.blur;
       newFormdata[element.id] = newElement;
       
       this.setState({
           formdata: newFormdata
       })
    }

    validate = (element) =>{
        let error = [true, ''];

        if(element.validation.email){
            const valid = /\S+@\S+\.\S+/.test(element.value);
            const message = `${!valid ? 'The email is invalid':''}`;
            error = !valid ? [valid, message]: error;

        }
        

        if(element.validation.password){
            const valid = element.value.length >= 5;
            const message = `${!valid ? 'The password must be greater than 5':''}`;
            error = !valid ? [valid, message]: error;

        }


        if(element.validation.required){
            const valid = element.value.trim() !=='';
            const message = `${!valid ? 'This field  is required':''}`;
            error = !valid ? [valid, message]: error;

        }

        return error;
    }


    sumbitForm = (event, type) =>{

        event.preventDefault();

        if(type !==null){
            let dataToSubmit = {};
            let formIsValid = true;

            for (let key in this.state.formdata){
                dataToSubmit[key] = this.state.formdata[key].value;
            }

            for(let key in this.state.formdata){
                formIsValid = this.state.formdata[key].valid && formIsValid;
            }
            if(formIsValid){

                this.setState({
                loading:true,
                registerError:''

                })
                if(type){
                    firebase.auth().signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
                    .then(() => {this.props.history.push('/')})
                    .catch((error) => {
                        this.setState({
                            loading: false,
                            registerError: error.message
                        })
                    })
                }else{
                    firebase.auth().createUserWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
                        .then(() => {this.props.history.push('/')})
                        .catch((error) => {
                            this.setState({
                                loading: false,
                                registerError: error.message
                            })
                        })
                }
                
            }
        }

    }


    submitButton = ()=>(
        this.state.loading ? "loading...":

        <div>
        <button onClick = { (event)=> this.sumbitForm(event, false)}> Register</button>
        <button onClick = { (event)=> this.sumbitForm(event, true)}> Log In </button>
        </div>

    )

    showError = () => (

        this.state.registerError !==''? 
        <div className='registerError'>
            {this.state.registerError}
        </div>: ''
    )

    render(){
        return (
            
            <div className="logContainer">
            <form>
            <h2> Regisgter / Log in</h2>
               <FormField 
               id={ 'email'}
               formdata = { this.state.formdata.email }
               change = { (element) => this.updateForm(element)}
               />

               <FormField 
               id={ 'password'}
               formdata = { this.state.formdata.password }
               change = { (element) => this.updateForm(element)}
               />
                    { this.submitButton()}
                    { this.showError() }
               </form>
            </div>
        )
    }
}

export default SignIn;