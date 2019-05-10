import React from 'react';
import '../videosList.css';
import VideosListTemplate from '../videoListTemplate';



const VideoRelated = (props) =>{

    return(
        <div className="videoRelatedWrapper">
            <VideosListTemplate
                data = {props.data}
                teams ={props.teams}
            />
        
        
        </div>
    )
}

export default VideoRelated;