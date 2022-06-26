import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createDataInFirebase, readData, updateData, createData, deleteData } from '../config/firebase';



const Main = () => {
    const navigate = useNavigate()
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
                navigate('/Login')
            }
        });
    }, [])
    const handleClick = () => {
        navigate('/')
    };

    const createFunc = async () => {
        console.log('start')
        const res = await createDataInFirebase()
        console.log('fin', res)
    }
    const read = async () => {
        console.log("read")
        await readData()
    }

    const handleUpdate = async () => {
        await updateData();
    };

    const handleDelete = async () => {
        await deleteData();
    }
    return (
        <>
            <h1>Main</h1>
            <Button variant="outlined" onClick={handleClick}>戻る</Button>
            <Button onClick={createFunc}>DBへ保存</Button>
            <Button onClick={read}>DB読み取り</Button>
            <Button variant="outlined" onClick={handleUpdate}>Update</Button>
            <Button variant="outlined" onClick={handleDelete}>Delete</Button>
        </>
    );
};
export default Main;