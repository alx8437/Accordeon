import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: "input",
}


export const UncontrolledInput = () => {
    const ref = useRef<HTMLInputElement>(null)

    const [value, setValue] = useState<string>("")

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const changedValue = e.currentTarget.value
        setValue((changedValue))
    }

    const save = () => {
        const el = ref.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <button onClick={save}>save</button>
        <input onChange={changeValue} ref={ref}/> value: {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>("")
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={changeInputValue}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false)
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={changeInputValue}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string>("0")
    const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={changeSelectValue}>
        <option value="0">none</option>
        <option value="1">Moscow</option>
        <option value="2">Kiev</option>
        <option value="3">Minsk</option>
    </select>
}




