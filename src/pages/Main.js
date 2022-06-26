import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";



const Main = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log(user)
                // ...
            } else {
                // User is signed out
                // ...
                console.log(user)
                Navigate('/Login')
            }
        });
    }, [])
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