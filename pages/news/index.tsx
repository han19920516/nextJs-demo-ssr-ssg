//domain/news
import React from "react";
import Link from 'next/link';

function News(){
    return <>
    <h1>The News Page</h1>
    <Link href='/news/ss'>
        a details page
    </Link>
    </>
}

export default News;