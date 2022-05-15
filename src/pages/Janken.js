import React, { useContext, useState, useReducer, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Janken = () => {
    const [me, setMe] = useState("")
    const [enemy, setEnemy] = useState("")
    const [result, setResult] = useState("")


    const hand = ['ぐー', 'ちょき', 'ぱー'];


    useEffect(() => {
        fight()
    }, [me, enemy]);

    const rock = () => {
        setMe("ぐー")
        const num = Math.floor(Math.random() * hand.length);
        setEnemy(hand[num])
    }
    const scissors = () => {
        setMe("ちょき")
        const num = Math.floor(Math.random() * hand.length);
        setEnemy(hand[num])
    }
    const paper = () => {
        setMe("ぱー")
        const num = Math.floor(Math.random() * hand.length);
        setEnemy(hand[num])
    }

    const fight = () => {
        if (me === enemy) {
            setResult('引き分けです。')
            console.log('引き分け')
        }
        if (me === 'ぐー' && enemy === 'ちょき' ||
            me === 'ちょき' && enemy === 'ぱー' ||
            me === 'ぱー' && enemy === 'ぐー') {
            setResult('あなたの勝ちです。')
            console.log('勝ち')
        }
        if (me === 'ぐー' && enemy === 'ぱー' ||
            me === 'ちょき' && enemy === 'ぐー' ||
            me === 'ぱー' && enemy === 'ちょき') {
            setResult('あなたの負けです。')
            console.log('負け')
        };
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
            {/* <Button onClick={fight}>結果</Button> */}
            <p>勝敗:{result}</p>
        </>
    );
};

export default Janken;