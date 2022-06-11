import React from 'react';
import useNavigate from 'react-router-dom';
import { Link, useParams, Switch, Routes } from 'react-router-dom';

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
                <li>
                    <Link to="/Uranai">色診断占い</Link>
                </li>
                <li>
                    <Link to="/Login">ログイン</Link>
                </li> <li>
                    <Link to="/Main">メイン</Link>
                </li> <li>
                    <Link to="/CreateUser">クリエイトユーザー</Link>
                </li>
            </ul>
        </>
    )
}
export default Home;