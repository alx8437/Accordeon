import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const callback = action("accordion mode changed")
const onClickcallback = action("some item was clicked")

export const DefaultAccordion = () =>
    <Accordion
        items={[
            {title: "Alex", value: 1},
            {title: "Vlad", value: 2},
            {title: "Rita", value: 3},
            {title: "Natasha", value: 4}
        ]}
        onClickItem={onClickcallback}
        titleValue={"Menu"}
        collapsed={false}
        setCollapsedAccordion={callback}
    />
export const isCollapsed = () =>
    <Accordion
        items={[]}
        titleValue={"Menu"}
        collapsed={true}
        setCollapsedAccordion={callback}
        onClickItem={onClickcallback}
    />
export const notCollapsed = () =>
    <Accordion
        items={[
            {title: "Alex", value: 1},
            {title: "Vlad", value: 2},
            {title: "Rita", value: 3},
            {title: "Natasha", value: 4}
        ]}
        titleValue={"Users"}
        onClickItem={onClickcallback}
        collapsed={false}
        setCollapsedAccordion={callback}
    />
export const ChangeToggle = () => {
    const [toggle, setOnToggle] = useState<boolean>(false)
    return <Accordion
        items={[
            {title: "Alex", value: 1},
            {title: "Vlad", value: 2},
            {title: "Rita", value: 3},
            {title: "Natasha", value: 4}
        ]}
        onClickItem={(value) => {
            alert(value)
        }}
        titleValue={"Menu"}
        collapsed={toggle}
        setCollapsedAccordion={() => setOnToggle(!toggle)}
    />
}



