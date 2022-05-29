import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams, Route, Switch } from 'react-router-dom';

const PageA = () => {
    const HelloWorld = useParams('')
    console.log(HelloWorld)

    return (
        <>
            <h1>PageA</h1>
            {/* <h2>{HelloWorld}</h2> */}
        </>
    )
}

export default PageA;