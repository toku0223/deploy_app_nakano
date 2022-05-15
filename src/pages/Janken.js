import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ROCK = "ぐー"
const SCISSORS = "ちょき"
const PAPER = "ぱー"
const WIN = "あなたの勝ちです"
const LOSE = "あなたの負けです"
const DRAW = "引き分けです"
const hand = [ROCK, SCISSORS, PAPER];

const Janken = () => {
    const [me, setMe] = useState("")
    const [enemy, setEnemy] = useState("")
    const [result, setResult] = useState("")
    
    useEffect(() => {
        fight()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [me, enemy]);

    const decideMyHand = (te) => {
        decideCPUHand()
        switch (te) {
            case ROCK:
                setMe(ROCK)
                return;
            case SCISSORS:
                setMe(SCISSORS)
                return;
            case PAPER:
                setMe(PAPER)
                return;
            default:
                break;
        }
    }

    const decideCPUHand = () => {
        const num = Math.floor(Math.random() * hand.length);
        setEnemy(hand[num])
    }

    const fight = () => {
        if(me === "") return
        if (me === enemy) {
            setResult(DRAW)
            console.log(DRAW)
        }
        if (me === 'ぐー' && enemy === 'ちょき' ||
            me === 'ちょき' && enemy === 'ぱー' ||
            me === 'ぱー' && enemy === 'ぐー') {
            setResult(WIN)
            console.log('勝ち')
        }
        if (me === 'ぐー' && enemy === 'ぱー' ||
            me === 'ちょき' && enemy === 'ぐー' ||
            me === 'ぱー' && enemy === 'ちょき') {
            setResult(LOSE)
            console.log('負け')
        };
    }

    return (
        <>
            <Link to="/Toppage">トップへ戻る</Link>
            <br />
            <Button onClick={() => decideMyHand(ROCK)}>ぐー</Button>
            <Button onClick={() => decideMyHand(SCISSORS)}>ちょき</Button>
            <Button onClick={() => decideMyHand(PAPER)}>ぱー</Button>
            <p>あなたの手:{me}</p>
            <p>cpuの手:{enemy}</p>
            <p>勝敗:{result}</p>
        </>
    );
};

export default Janken;