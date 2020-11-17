import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsedAccordion: () => void
}

function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                setCollapsedAccordion={props.setCollapsedAccordion}
                title={props.titleValue}
                collapsed={props.collapsed}
            />
            { !props.collapsed && <AccordionBody/> }
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean;
    setCollapsedAccordion: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsedAccordion}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default ControlledAccordion;
