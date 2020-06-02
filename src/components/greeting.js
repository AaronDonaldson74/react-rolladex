import React from 'react';

function Greeting(props) {
    return(
        <div>
            <h1>Hello my name is {props.name} I am {props.age}</h1>
        </div>
    )
}

export default Greeting