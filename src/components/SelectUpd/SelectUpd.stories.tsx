import React, {useState} from "react";
import {SelectUpd} from "./SelectUpd";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select_upd",
    component: SelectUpd
}


export const WithValue = () => {

    const [value, setValue] = useState("2")

    return (
        <>
            <SelectUpd
                value={value}
                items={
                    [
                        {title: "none", value: "0"},
                        {title: "Samara", value: "1"},
                        {title: "Moscow", value: "2"},
                        {title: "Krasnodar", value: "3"},
                        {title: "Odessa", value: "4"}
                    ]
                }
                onChange={setValue}
            />
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <SelectUpd
        value={value}
        items={
            [
                {title: "none", value: "0"},
                {title: "Samara", value: "1"},
                {title: "Moscow", value: "2"},
                {title: "Krasnodar", value: "3"},
                {title: "Odessa", value: "4"}
            ]
        }
        onChange={setValue}
    />
}