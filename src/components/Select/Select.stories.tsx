import React, {useState} from "react";
import {ItemSelectType, Select} from "./Select";

export default {
    title: "Select_my",
    component: Select
}


export const DefaultSelect = () => {

    const [collapsedSelect, setCollapsedSelect] = useState<boolean>(false)
    const [items, setItems] = useState<Array<ItemSelectType>>([
        {title: "none", value: 0},
        {title: "Samara", value: 1},
        {title: "Moscow", value: 2},
        {title: "Krasnodar", value: 3},
        {title: "Odessa", value: 4}
    ])

    const setCollapsed = () => {
        setCollapsedSelect(!collapsedSelect)
    }

    const selectItems = (value: number) => {
        const item = items.find(i => i.value === value)
        let newItems = items.filter(i => i.value !== value)
        if (newItems && item) {
            newItems = [item, ...newItems]
            setItems(newItems)
        }
        setCollapsed()
    }


    return <Select
        items={items}
        onChangeItem={(value) => {
        }}
        selectItems={selectItems}
        setCollapsed={setCollapsed}
        collapsed={collapsedSelect}
    />
}


