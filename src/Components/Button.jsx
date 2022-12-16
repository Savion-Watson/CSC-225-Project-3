import React from 'react'; 

function Button(props) { 

    //Every React component can be used as a (CLOSED) inline element 
    //Any text inbetween these elements (or children) can be retrieved as Props! 

    return <button type="button" onClick={props.clickHandler} class="btn btn-primary">{props.children}</button>
} 

export default Button;