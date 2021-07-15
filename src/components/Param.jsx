import React from 'react';

const Param = props => {
    return (
        <>
        <h1>This is the Param component</h1>
        <h3>The number is: {parseInt(props.number)} </h3>
        {
            console.log(typeof(parseInt(props.number)))
        }
        </>

    );
}

export default Param;


