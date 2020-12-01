import React, {useState} from "react";
import s from "./Select.module.css"


export type ItemSelectType = {
    title: string
    value: any
}

type SelectPropsType = {
    onChangeItem: (value: any) => void
    items: ItemSelectType[]
    selectItems: (value: number) => void
    setCollapsed: () => void
    collapsed: boolean
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <SelectTitle
                collapsed={props.collapsed}
                title={props.items[0].title}
                setCollapsed={props.setCollapsed}
            />
            {props.collapsed && <SelectBody selectItems={props.selectItems} items={props.items}/>}
        </div>
    )
}


type SelectTitlePropsType = {
    title: string
    collapsed: boolean;
    setCollapsed: () => void
}

function SelectTitle(props: SelectTitlePropsType) {

    const setCollapsed = () => {
        props.setCollapsed()
    }

    return (
        <>
            <div onClick={setCollapsed}>{props.title}

            </div>
        </>

    )
}

type SelectBodyPropsType = {
    items: Array<ItemSelectType>
    selectItems: (value: number) => void
}

function SelectBody(props: SelectBodyPropsType) {
    return (
        <div className={s.body}>
            {props.items.map(i => <div
                key={i.value}
                onClick={() => props.selectItems(i.value)}
            >{i.title}</div>)}
        </div>
    )
}