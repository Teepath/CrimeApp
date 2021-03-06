import React, { Component } from 'react';
import { firebaseDb, firebaseTeams, firebaseLooper, firebase } from '../../../../firebase';
import '../../article.css';
import Header from './header';

class NewArticle extends Component{
    state ={
        article: [],
        team: [], 
        imgUrl: ''
    }

    componentWillMount(){
        firebaseDb.ref(`articles/${this.props.match.params.id}`).once('value')
            .then(snapshot =>{
                let article = snapshot.val();
                firebaseTeams.orderByChild("id").equalTo(article.team).once('value')
                .then((snapshot) =>{
                    const team = firebaseLooper(snapshot);
                    console.log(article);
                    this.setState({
                        article,
                        team
                    })
                    this.getImageUrl(article.image);
                })
               
            })


    //    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
    //    .then(response =>{
    //        let article = response.data[0]

    //        axios.get(`${URL}/teams?id=${article.team}`)
     //       .then(response => {
     //           this.setState({
     //               article,
      //              team: response.data
       //         })
        //    })
       // })

        
    }


    getImageUrl = (filename)=>{
        firebase.storage().ref('images')
        .child(filename).getDownloadURL()
        .then(url =>{
            this.setState({
                imgUrl: url
            })
        })
    }

    render(){

        const article = this.state.article
        const team = this.state.team
        return(
            <div className="article_wrapper">
                <Header
                teamData = {team[0]}
                date ={article.date}
                author = {article.author}
                />
               <div className="articleBody">
               <h1>{article.title}</h1>
               <div className="articleImage"
               style={{
                   background:`url('${this.state.imgUrl}')`
               }}></div>

               <div className="aricleText"
               dangerouslySetInneHTML = {{
                   _html: article.body
                
                }}>
               

               </div>

               </div>
            </div>
        )
    }
}

export default NewArticle;