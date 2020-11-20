import React from "react";
import styles from "./OnOf.module.css"

type PropsType = {
    on: boolean
    setOnToggle: (toggle: boolean) => void
}

export function OnOf(props: PropsType) {

    let classIndicator = (props.on) ? `${styles.indicator_on}` : `${styles.indicator_of}`;
    let classButtonOn = (props.on) ? `${styles.button_on}` : `${styles.button}`;
    let classButtonOf = (props.on) ? `${styles.button}` : `${styles.button_of}`;

    return (
        <div className={styles.toggle}>
            <button className={classButtonOn} onClick={() => props.setOnToggle(true)}>on</button>
            <button className={classButtonOf} onClick={() => props.setOnToggle(false)}>of</button>
            <div className={classIndicator}/>
        </div>
    )
}
