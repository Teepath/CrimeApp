import React from 'react';
import moment from 'moment';

import FontAwesome  from 'react-fontawesome';
import './cardInfo.css';

const CardInfo = (props) => {

    const formatDate = (date)=>{
        return moment(date).format( "MM-DD-YYYY");
    }

   const teamName =(teams,team) => {
        let data = teams.find((item)=>{
            return item.teamId === team
        });
        

        if(data){
            return data.name
        }

    }


    return(
        <div className="cardInfo">
        <span className="teamName">
            {teamName(props.teams, props.team)}
        </span>
        <span className="date">
            <FontAwesome name="clock-o"/>
                {formatDate(props.date)}
        </span>
        </div>
      

    )

}

export default CardInfo;