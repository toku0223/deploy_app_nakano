import { React, useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Uranai = () => {
    const [date, setDate] = useState("")
    const [colorUrl, setColorUrl] = useState("")
    const [error, setError] = useState("")
    const url = `http://birthday-color.cafein.jp/html/${colorUrl}.html`

    const monthRef = useRef(null);
    const dayRef = useRef(null);
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");

    const monthList = () => {
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            monthRef.current.appendChild(option);
        }
    }

    const dayList = () => {
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            dayRef.current.appendChild(option);
        }
    }

    const selectMonth = (e) => {
        setMonth(e.target.value);
    }

    const selectDay = (e) => {
        setDay(e.target.value);
    }

    useEffect(() => {
        monthList();
        dayList();
    }, []);

    const birthday = () => {
        if (month < 10 && day < 10) {
            setColorUrl("0" + month + "0" + day)
        } else if (month < 10) {
            setColorUrl("0" + month + day)
        } else if (day < 10) {
            setColorUrl(month + "0" + day)
        } else {
            setColorUrl(month + day)
        }

    }


    const takeURL = () => {
        console.log(date)

        if (date == "") {
            setError("なにか入力してください")
            setColorUrl(date)
            setDate("")
        } else {
            setColorUrl(date)
            setDate("")
            setError("")
        }
    }
    return (
        <>
            <a href={url} target="_blank">色占い</a>
            <br />
            {/* <input
                type="number"
                value={date}
                maxLength={4 > 0}
                onChange={(e) => setDate(e.target.value)}
            /> */}
            <Button onClick={birthday} href={url} target="_blank">占い</Button>
            <br />
            <label>
                <select ref={monthRef} value={month} onChange={selectMonth}></select>月
            </label>
            <label>
                <select ref={dayRef} value={day} onChange={selectDay}></select>日
            </label>

        </>
    )
}

export default Uranai;
