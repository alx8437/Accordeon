import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOf} from "./components/ControlledOnOf/OnOf";
import {Accordion} from "./components/Accordeon/Accordion";
import {UncontrolledOnOf} from "./components/UncontrolledOnOf/UncontrolledOnOf";
import {ItemSelectType, Select} from "./components/Select/Select";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [toggle, setOnToggle] = useState<boolean>(false)
    const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(true)


    return (
        <div className={"App"}>

            {/*            <OnOf
                setOnToggle={setOnToggle}
                on={toggle}
            />
            <Accordion
                setCollapsedAccordion={() => setCollapsedAccordion(!collapsedAccordion)}
                titleValue={"--Menu--"}
                collapsed={collapsedAccordion}
                items={[]}
                onClickItem={() => {}}
            />
            <Rating
                value={ratingValue}
                setRatingValue={setRatingValue}
            />
            <UncontrolledOnOf setToggle={setOnToggle}/> {toggle.toString()}*/}
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
