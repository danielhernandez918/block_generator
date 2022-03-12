import React from 'react';
import './styles.css';
    
    
const BoxDisplay = (props) => {
    return (
        <>
            {/* <h1>Current Box</h1>
            {
                props.currentBox === "There are no boxes" ?
                <p id="box" style={{backgroundColor: props.currentBox}}>{props.currentBox}</p>:
                <p id="box" style={{backgroundColor: props.currentBox}}></p>
            } */}
            <h1>Color Boxes List</h1>
            {
                props.boxes.map((box, i) => {
                    return (
                        <div class="row">
                            <div id="box" key={i} style={{backgroundColor: box}}></div>
                        </div>
                    )
                })
            }
        </>
    );
};
    
export default BoxDisplay;