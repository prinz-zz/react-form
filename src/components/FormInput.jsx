import { useState } from 'react';
import './formInput.scss';

export default function FormInput(props) { 

    const [focus, setFocus] = useState(false);
    const {label, id, errorMessage, onChange, ...inputProps} = props;

    return (
        <div className="forminput">

            {/* <input placeholder={props.placeholder} onChange={ (e) => props.setUsername(e.target.value)}/> using useState*/}
            {/* <input placeholder={props.placeholder} ref={props.userRef} /> using useRef */}
           
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={(e)=> setFocus(true) } focus={focus.toString()} />
            <span>{errorMessage}</span>

        </div>
    )
}