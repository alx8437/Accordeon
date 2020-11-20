import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const callback = action("accordion mode changed")

export const DefaultAccordion = () =>
    <Accordion
        titleValue={"Menu"}
        collapsed={false}
        setCollapsedAccordion={callback}
    />
export const isCollapsed = () =>
    <Accordion
        titleValue={"Menu"}
        collapsed={true}
        setCollapsedAccordion={callback}
    />
export const notCollapsed = () =>
    <Accordion
        titleValue={"Users"}
        collapsed={false}
        setCollapsedAccordion={callback}
    />
export const ChangeToggle = () => {
    const [toggle, setOnToggle] = useState<boolean>(false)
    return <Accordion
        titleValue={"Menu"}
        collapsed={toggle}
        setCollapsedAccordion={() => setOnToggle(!toggle)}
    />
}



