import React, { Component } from 'react';
import './videosList.css';
import { firebaseTeams, firebaseVideos, firebaseLooper} from '../../../firebase';
import Buttons from '../buttons/buttons';
import VideoListTemplate from '../VidoesList/videoListTemplate';


class VidoeList extends Component {
        state = {
            teams:[],
            videos: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount
        }

        componentWillMount(){
            this.request(this.state.start, this.state.end)
        }


        request =(start,end)=>{
            if(this.state.teams.length < 1){
                firebaseTeams.once('value')
                .then(snapshot => {
                    const teams = firebaseLooper(snapshot);
                    this.setState({
                        teams
                    })
                })
            }
            firebaseVideos.orderByChild('id').once('value')
            .then((snapshot) => {

                const videos = firebaseLooper(snapshot);

                this.setState({
                    videos:[...this.state.videos, ...videos],
                    start,
                    end
                    
                })
            })

        }

        renderVideoList = () =>{
            let template = null;
            switch(this.props.type){
                case ('card'):
                template = <VideoListTemplate data={this.state.videos} teams={this.state.teams} />
                break;
                default:
                template = null
            }

            return template
        }

        loadMore = ()=> {
            let end = this.state.start + this.state.amount;
            this.request(this.state.end +1, end);
        }
        renderButton = () =>{
            return this.props.loadmore? <Buttons 
                type="loadmore"
                loadMore={()=> this.loadMore()}
                cta="Load More Videos"/>:
            
            <Buttons type="linkTo" cta="More Videos" linkTo="/videos" />

        }

        renderTitle = (title) =>{
            return title ?
            <h3><strong>NBA</strong> Videos</h3>
            : null
        }
    render(){

        return(
            <div className="videos_wrapper">
                { this.renderTitle(this.props.title)}
                {this.renderVideoList()}
                { this.renderButton()}
               
            </div>
        )
    }
}

export default VidoeList;