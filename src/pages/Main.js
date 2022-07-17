import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createDataInFirebase, readData, updateData, createData, deleteData } from '../config/firebase';
import { Form, Table } from 'react-bootstrap';


const Main = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [born, setBorn] = useState('');

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
        const res = await createDataInFirebase(first, last, born)
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
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Table>
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                                <th>born</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Label>first</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="first"
                                        value={first}
                                        onChange={(e) => setFirst(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Label>Last</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="last"
                                        value={last}
                                        onChange={(e) => setLast(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Label>Born</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="born"
                                        value={born}
                                        onChange={(e) => setBorn(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Form.Group>
            </Form>
            <Button variant="outlined" onClick={handleClick}>戻る</Button>
            <Button onClick={createFunc}>DBへ保存</Button>
            <Button onClick={read}>DB読み取り</Button>
            <Button variant="outlined" onClick={handleUpdate}>Update</Button>
            <Button variant="outlined" onClick={handleDelete}>Delete</Button>
        </>
    );
};
export default Main;