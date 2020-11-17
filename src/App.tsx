import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledOnOf} from "./components/ControlledOnOf/ControlledOnOf";
import ControlledAccordion from "./components/Accordeon/ControlledAccordion";
import {UncontrolledOnOf} from "./components/UncontrolledOnOf/UncontrolledOnOf";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [toggle, setOnToggle] = useState<boolean>(false)
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)


    return (
        <div className={"App"}>
            <ControlledOnOf
                setOnToggle={setOnToggle}
                on={toggle}
            />
            <ControlledAccordion
                setCollapsedAccordion={() => setCollapsedAccordion(!collapsedAccordion)}
                titleValue={"--Menu--"}
                collapsed={collapsedAccordion}
            />
            <Rating
                value={ratingValue}
                setRatingValue={setRatingValue}
            />
            <UncontrolledOnOf setToggle={setOnToggle}/> {toggle.toString()}
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
