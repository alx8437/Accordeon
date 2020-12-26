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

export const Select = React.memo((props: SelectPropsType) => {
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
})


type SelectTitlePropsType = {
    title: string
    collapsed: boolean;
    setCollapsed: () => void
}

const SelectTitle = React.memo((props: SelectTitlePropsType) => {
    const setCollapsed = () => {
        props.setCollapsed()
    }

    return  <React.Fragment>
            <div onClick={setCollapsed}>{props.title} </div>
        </React.Fragment>
});

type SelectBodyPropsType = {
    items: Array<ItemSelectType>
    selectItems: (value: number) => void
}

const SelectBody = React.memo((props: SelectBodyPropsType) => {
    return (
        <div className={s.body}>
            {props.items.map(i => <div
                key={i.value}
                onClick={() => props.selectItems(i.value)}
            >{i.title}</div>)}
        </div>
    )
});