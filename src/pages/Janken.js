import React, { useContext, useState, useReducer } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Janken = () => {
    const [enemy, setEnemy] = useState("")
    const [me, setMe] = useState("")


    const hand = ['ぐー', 'ちょき', 'ぱー'];
    const num = Math.floor(Math.random() * hand.length);

    const rock = () => {
        setMe("ぐー")
        setEnemy(hand[num])
    }
    const scissors = () => {
        setMe("ちょき")
        setEnemy(hand[num])
    }
    const paper = () => {
        setMe("ぱー")
        setEnemy(hand[num])
    }

    return (
        <>
            <Link to="/Toppage">トップへ戻る</Link>
            <br />
            <Button onClick={rock}>ぐー</Button>
            <Button onClick={scissors}>ちょき</Button>
            <Button onClick={paper}>ぱー</Button>
            <p>あなたの手:{me}</p>
            <p>cpuの手:{enemy}</p>
        </>
    );
};

export default Janken;