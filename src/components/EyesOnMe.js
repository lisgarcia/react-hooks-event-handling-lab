// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function handleFocus() {
        return console.log('Good!')
    }
    function handleBlur() {
        return console.log('Hey! Eyes on me!')
    }
    return <button 
        placeholder = 'Eyes on me'
        onFocus= {(e) => {handleFocus(e)}}
        onBlur = {(e) => {handleBlur(e)}}
    >Eyes on me</button>

}

export default EyesOnMe