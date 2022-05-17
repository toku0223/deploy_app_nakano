import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Qiita = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://qiita.com/api/v2/items')
            .then(res => {
                console.log(res)
                setData(res.data)

            });
    }, []);

    return (
        <>
            <h1>Qiita</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Toppage">トップへ戻る</Link>
                </li>
                <li>
                    <Link to="/Janken">じゃんけん</Link>
                </li>
            </ul>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) => {
                        return (
                            <tr key={index}>
                                <td>{d.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default Qiita;