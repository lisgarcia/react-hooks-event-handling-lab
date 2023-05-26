// Code Keypad Component Here
import React from 'react';

function Keypad (e){
    function handleChange(e) {
        return console.log('Entering password...')
    }
    return (
        <div>
            <input type ="password" 
                onChange = {handleChange}
            />
        </div>
    )

}



export default Keypad;