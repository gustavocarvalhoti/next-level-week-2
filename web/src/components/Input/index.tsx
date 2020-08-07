import React, {InputHTMLAttributes} from 'react';
import './styles.css';

// Recebe todas as props do input default
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
}

// ...rest = pega o resto das props que o dev passar e aplica no input
const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input id={name} type="text" {...rest}/>
        </div>
    );
}

export default Input;

