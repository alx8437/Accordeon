import React from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";
import UncontrollAccordeon from "./components/UncontrollAccordeon/UncontrollAccordeon";

function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article1
            <Rating value={3}/>
            <UncontrollAccordeon titleValue={"Menu"}/>
            <UncontrollAccordeon titleValue={"Users"}/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOf />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
