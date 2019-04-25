import React from 'react';


const DataForm = (props)=>{

    return(
        <div className="container">
                <h1> CRIME REPORT FORM</h1>
            <form onSubmit={props.handlesubmit}>
                <div className="form-box">
                    <label for="firstName" className="label"> FirstName</label>
                <input type="text" value={props.formd.firstName} 
                name="firstName" 
                onChange={props.handleform} className="input" />
                </div>
                
                <div className="form-box">
                <label for="email" className="label"> Email</label> 
                <input type="text"  
                value={props.formd.email} name="email" 
                onChange={props.handleform}  className="input"/>
                </div>

                {/* (Need api key for this to work)
                <div>
                    <label for="long"> Longitude </label>
                <input type="text" value= {props.items.longitude} name="long" onChange={props.handleForm} />
                </div>

            
                <div> 
                    <label for="lat"> Latitude </label>
                <input type="text" value={props.items.latitude} name="lat" onChange= {props.handleForm} />
                </div> */}
           
                <div className="submit">
                <button type="submit" className="submitbtn"> Send </button>
                </div>
           
            </form>
            <div className="report"><h3 className="crimeNum"> 
            Crime-Number: </h3> <button className="input1">{props.formd.crimeNum} </button> </div> <br/>

                <div>
                <button className="submitbtn" onClick={props.signout} style={{display: "float", float:"right", background:"#6789456"}}> Log out </button>
                </div>
                
        </div>
    )

}

export default DataForm;