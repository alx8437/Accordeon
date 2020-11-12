import React, {useState} from "react";
import styles from "./OnOf.module.css"



export function OnOf() {

    const [onOf, setOnOff] = useState(false);


    let classIndicator = (onOf) ? `${styles.indicator_on}` : `${styles.indicator_of}`;
    let classButtonOn = (onOf) ? `${styles.button_on}` : `${styles.button}`;
    let classButtonOf = (onOf) ? `${styles.button}` : `${styles.button_of}`;


    return (
        <div className={styles.toggle}>
            <button className={classButtonOn} onClick={() => setOnOff(true)}>on</button>
            <button className={classButtonOf} onClick={() => setOnOff(false)}>of</button>
            <div className={classIndicator}/>
        </div>
    )
}
