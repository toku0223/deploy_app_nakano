import React from 'react';
import useNavigate from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <ul>
                <li>
                    <Link to="/Toppage">トップ</Link>
                </li>
                <li>
                    <Link to="/Janken">じゃんけん</Link>
                </li>
                <li>
                    <Link to="/Qiita">QiitaAPI</Link>
                </li>
                <li>
                    <Link to="/PageA">PageA</Link>
                </li>
                <li>
                    <Link to="/PageB">PageB</Link>
                </li>
            </ul>
        </>
    )
}
export default Home;