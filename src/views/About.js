import React from 'react';

export default function About(props) {
    console.log(props)
    return (
        <h1>About {props.match.params.minhaVariavel}</h1>
    )
}