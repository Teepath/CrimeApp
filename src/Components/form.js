import React from 'react';


const inpForm = (props)=>{

    return(
        <div>
            <form>
            <input type="text" value={props.formD.firstname} name="firstName" onChange={props.handleForm} />
            <input type="text"  value={props.formD.email} name="email" onChange={props.handleForm} />
            <input type="text" value= {props.items.longitude} name="long" onChange={props.handleForm} />
            <input type="text" value={props.items.latitude} name="lat" onChange= {props.handleForm} />

            <button onClick={props.handleClick}> Send </button>
            </form>
        </div>
    )

}

export default inpForm;