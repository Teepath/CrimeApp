import React from 'react';
import TeamInfo from '../../Elements/teamInfo';
import '../../article.css';
//import PostData from '../../Elements/postData';

const Header = (props) =>{

const teamInfo = (team) => {
    return    team ?(
        <TeamInfo team={team}/>
    ): null
     
}

    return (
        
        <div>
          {teamInfo(props.teamData)}
        </div>
    

    )
        
    }

export default Header;