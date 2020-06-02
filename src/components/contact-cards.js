import React from 'react';

function ContactCards (props) {
    return(
        <div>
            {props.firstName}
            {props.lastName}
            {props.phoneNumber}
        </div>
    )
}

export default ContactCards