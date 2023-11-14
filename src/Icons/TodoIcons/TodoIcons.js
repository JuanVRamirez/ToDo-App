import React from "react";
import {FaCheck as CheckIcon} from 'react-icons/fa';
import {ImCross as DeleteIcon} from 'react-icons/im';
import "./TodoIcons.css"

const iconsType = {
    "check": (color)=> <CheckIcon className="Icon-svg" fill={color}/>,
    "delete":(color)=> <DeleteIcon className="Icon-svg" fill={color}/>,
}

function TodoIcons({type, color, onClick}){
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconsType[type](color)}
        </span>
    )
}

export {TodoIcons}