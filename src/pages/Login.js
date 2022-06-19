import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { loginHandleClick } from '../config/firebase';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const result = await loginHandleClick(email, password)
            navigate('/main')
        } catch (error) {
            console.log(error)
            if (error === "Firebase: Error (auth/invalid-email).") {
                setError("email、passwordを入力してください。")
            } else if (error === "Firebase: Error (auth/internal-error).") {
                setError("ログインに失敗しました。")
            } else if (error === "Firebase: Error (auth/wrong-password).") {
                setError("パスワードが間違っています。")
            }
        }

    }
    const handleGoogleClick = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/main')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <input id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <input id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            {error} <br />
            <Button onClick={handleClick}>Login</Button><br />

            <Link to='/createUser' >アカウント作成</Link><br />
            <Button onClick={handleGoogleClick}>GoogleLogin</Button><br />

        </div>
    );
};
export default Login;