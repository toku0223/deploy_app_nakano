import React, { useContext, useState, useReducer } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { Store } from '../store/index';
import { HELLO, INCREMENT } from '../actions/index';
import reducer from '../reducers/index';



const TopPage = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [error, setError] = useState("")

    const Hello = (e) => {
        console.log("Hello World")
        window.confirm("Hello World")
    };


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0)
    }

    const onClickText = () => {
        if (text == "") {
            setError("なにか入力してください")
            setText2(text)
            setText("")
        } else {
            setText2(text)
            setText("")
            setError("")
        }
    }

    return (
        <>
            <Link to="/Janken">じゃんけん</Link>
            <br />
            <Button variant="primary" onClick={Hello}>Hello world</Button>
            <br />
            <Button variant="primary" onClick={increment}>いいね！</Button>
            <Button variant="primary" onClick={decrement}>よくないね！</Button>
            <Button variant="primary" onClick={reset}>reset</Button>
            <h1>{count}</h1>


            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={onClickText}>hello</Button>
            <p>{text2}</p>
            <p style={{ color: "red" }}>{error}</p>

        </>
    );
};

export default TopPage;