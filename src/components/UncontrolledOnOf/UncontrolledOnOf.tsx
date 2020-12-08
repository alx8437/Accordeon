import React, {useState} from "react";
import styles from "./UncontrolledOnOf.module.css"

type PropsType = {
    setToggle: (toggle: boolean) => void
    defaultValue?: boolean
}

export const UncontrolledOnOf = React.memo(UncontrolledOnOfNotMemo)

function UncontrolledOnOfNotMemo(props: PropsType) {

    const [onOf, setOnOff] = useState<boolean>(props.defaultValue ? props.defaultValue : false);

    let classIndicator = (onOf) ? `${styles.indicator_on}` : `${styles.indicator_of}`;
    let classButtonOn = (onOf) ? `${styles.button_on}` : `${styles.button}`;
    let classButtonOf = (onOf) ? `${styles.button}` : `${styles.button_of}`;

    const toggleOn = () => {
        props.setToggle(true)
        setOnOff(true)
    }

    const toggleOf = () => {
        props.setToggle(false)
        setOnOff(false)
    }


    return (
        <div className={styles.toggle}>
            <button className={classButtonOn} onClick={toggleOn}>on</button>
            <button className={classButtonOf} onClick={toggleOf}>of</button>
            <div className={classIndicator}/>
        </div>
    )
}
