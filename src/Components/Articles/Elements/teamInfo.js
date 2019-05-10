import React from 'react';

import '../article.css'


const TeamInfo = (props) =>{
    
 return (
      <div className="articleTeamHeader">
        <div className="left"
        style={{
            background: `url('/images/team/${props.team.logo}')`
        }}>
        </div>
        <div className="right">
        
        <span>{props.team.city} {props.team.name}</span>
          <div>
          <strong> W{props.team.stats[0].win} - L{props.team.stats[0].loss} </strong> 
        </div>
      

        </div>
        
    </div>
 )}

export default TeamInfo;