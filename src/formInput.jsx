import React,{useState} from 'react';
import './formInput.css';

const FormInput=(props)=>{
     const [focused,setFocused]=useState(false)
     const {id,onChange,value,label,errorMessage,...inputprops}=props
     
     const handleFocus = (e) =>{
        setFocused(true)
     }
     return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...inputprops} onChange={onChange} value={value} onBlur={handleFocus} onFocus={()=>{
                inputprops.name==='confirm password' && setFocused(true)
            }}
            focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
     )
}

export default FormInput;