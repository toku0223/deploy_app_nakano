import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../config/firebase';


const CreateUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleClick = async () => {
        const result = await createUser(email, password)
        console.log("π ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result", result)
        if (result) {
            navigate('/main')
        } else {
            setError("Userδ½ζγ«ε€±ζγγΎγγγ")
        }
    }
    return (
        <>
            <h1>CreateUser</h1>
            <input type='text' id="email" value={email} placeholder='email' onChange={e => setEmail(e.target.value)} /> <br />
            <input type='text' id="password" value={password} placeholder='password' onChange={e => setPassword(e.target.value)} /> <br />
            {error} <br />
            <Button onClick={handleClick}>Create</Button><br />
            <Link to='/'>ζ»γ</Link>
        </>
    )
}
export default CreateUser;