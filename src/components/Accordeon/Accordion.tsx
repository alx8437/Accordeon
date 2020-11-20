import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsedAccordion: () => void
}

export function Accordion(props: AccordionPropsType) {
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
    return <h3 onClick={(e) => props.setCollapsedAccordion()}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1 item</li>
            <li>2 item</li>
            <li>3 item</li>
        </ul>
    )
}

