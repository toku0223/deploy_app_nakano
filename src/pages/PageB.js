import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import PageA from './PageA';

const PageB = () => {
    return (
        <>
            <Link to="/">Homeへ戻る</Link>
            <PageA />
        </>
    )
}

export default PageB;