import React from "react";

type ItemsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsedAccordion: () => void
    items: ItemsType[]
    onClickItem: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                setCollapsedAccordion={props.setCollapsedAccordion}
                title={props.titleValue}
                collapsed={props.collapsed}
            />
            { !props.collapsed && <AccordionBody onClickItem={props.onClickItem} items={props.items}/> }
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

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClickItem: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map(item => <li key={item.value} onClick={() => props.onClickItem(item.value)}>{item.title}</li>)}
        </ul>
    )
}

