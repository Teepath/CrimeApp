import React, { Component } from 'react';
import {firebase, firebaseArticle, firebaseLooper} from '../../../firebase';
import SliderTemplates from './slider_template';



class NewSlider extends Component {
    state ={
        news : []
    }

    componentWillMount(){

        firebaseArticle.limitToFirst(3).once('value')
            .then((snapshot) =>{
                const news = firebaseLooper(snapshot);

                //news.forEach((item, i)=>{
                 //   firebase.storage().ref('images')
                  //  .child(item.image).getDownloadURL()
                   // .then( url =>{
                    //    news[1].image = url;

                      //  this.setState({
                       //     news
                    //    })
                    //})
               // })

               const asynFunction = (item, i, cb) => {
                   firebase.storage().ref('images')
                   .child(item.image).getDownloadURL()
                   .then(url => {
                       news[i].image = url;
                       cb();
                   })

               }
              

               let requests = news.map((item, i)=>{
                   return new Promise((resolve) => {
                       asynFunction(item, i, resolve)
                   })
               })

               Promise.all(requests).then(()=>{
                   this.setState({
                       news
                   })
               })
            })


            

        //fetch(`${URL}/articles?start={this.props.start}& end={this.props.amount}`)
          //  .then(response => response.json())
           // .then((data)=> 
          // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
           // .then(response => 
            //this.setState({
            //    news: response.data
           // }))
            
    }

    
    render(){
        console.log(this.state);
        return (
            <div>
                <SliderTemplates data={this.state.news} type={this.props.type}/>
            </div>
        )
    }
    }
  
export default NewSlider;