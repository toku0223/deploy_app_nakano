import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageA = () => {
    return (
        <>
            <h1>PageA</h1>
            <Link to="/PageB">PageBへ</Link>
        </>
    )
}

export default PageA;