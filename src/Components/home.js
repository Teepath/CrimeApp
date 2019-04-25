import React from 'react';
import '../firebaseDb';



const Home = (props) =>{

    
    return(
        <div>
            
            <div className="logContainer">
            <h1> CrimeApp</h1>
            <button className="btn" onClick= {props.login}>Sign in</button>

            </div>

        </div>
     
    )
}

export default Home