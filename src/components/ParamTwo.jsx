import React from 'react';

const ParamTwo = props => {
    // this is pure CSS
    const Style1 =  {
        backgroundColor:props.color1,
        color:props.color2
    }

    return (
        <>
        <h1>This is the ParamTwo component</h1>
        <h3 style={Style1}>The word is: {props.word} </h3>
        </>
    );
}

export default ParamTwo;