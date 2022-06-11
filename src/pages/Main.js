import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';


const Main = () => {
    const Navigate = useNavigate()
    const handleClick = () => {
        Navigate('/')
    };
    return (
        <>
            <h1>Main</h1>
            <Button variant="outlined" onClick={handleClick}>戻る</Button>
        </>
    );
};
export default Main;