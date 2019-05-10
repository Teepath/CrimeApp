import React from 'react';
import './formFields.css';

const FormField = ({formdata, id, change}) =>{

    const showError = () =>{
        let errorMessage = null;
        if(formdata.validation && !formdata.valid){

            errorMessage = (
                <div className="labelError">
                    { formdata.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }

    const renderForm = ()=>{

        let renderTemplate = null;

        switch(formdata.element){
            case 'input':
            renderTemplate = (
                <div>
                <input
                 {...formdata.config}
                 value = { formdata.value}
                 onBlur = {(event) => change({event, id, blur:true })}
                 onChange = {(event) => change({event, id, blur:false })}
                />
                </div>

            )

            break;

            case 'select':

            renderTemplate = (
                <div>
                    <select
                    value={formdata.value}
                    name={formdata.config.name}
                 onBlur = {(event) => change({event, id, blur:true })}
                 onChange = {(event) => change({event, id, blur:false })}
                
             >      
                { formdata.config.option.map((item, i) => (
                    <option key={i} value={item.id}> {item.name} </option>
                ))}
                  
                    </select>
                </div>
            );

            break;

            default:
            renderTemplate = null;


        }

        return renderTemplate;


    }
    return (
        <div>
         {renderForm()}
         { showError()}
        </div>
    )
}

export default FormField;