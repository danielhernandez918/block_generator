import React, { useState } from  'react';
    
    
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewBox(color)
        setColor("")
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Color</h1>
            <div class="align">
                <textarea 
                    rows="1"
                    cols="30"
                    placeholder="Enter your color here"
                    name ="color"
                    onChange={ (e) => setColor(e.target.value) }
                    value={color}
                ></textarea>
                <input type="submit" value="Submit Color" />
            </div>
        </form>
    );
};
    
export default BoxForm;