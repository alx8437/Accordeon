import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

function UncontrollAccordeon(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle toggleCollapsed={toggleCollapsed} title={props.titleValue}/>
            {!collapsed && <AccordionBody/> }
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    toggleCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div onClick={props.toggleCollapsed}>
        <h3>{props.title}</h3>
    </div>
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


export default UncontrollAccordeon;
