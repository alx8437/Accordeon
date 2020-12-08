import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string;
}

export const UncontrolledAccordeon = React.memo(UncontrolledAccordeonNotMemo)
function UncontrolledAccordeonNotMemo(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState<boolean>(false);

    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    const toggleCollapsed = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitle toggleCollapsed={toggleCollapsed} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    toggleCollapsed: () => void
}

const AccordionTitle = React.memo(AccordionTitleNotMemo)
function AccordionTitleNotMemo(props: AccordionTitlePropsType) {
    return <div onClick={props.toggleCollapsed}>
        <h3>{props.title}</h3>
    </div>
}

const AccordionBody = React.memo(AccordionBodyNotMemo)
function AccordionBodyNotMemo() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};

