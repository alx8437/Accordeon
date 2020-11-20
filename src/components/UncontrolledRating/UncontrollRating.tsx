import React, {useState} from "react";
import styles from "./UncontrollRating.module.css"
import {RatingValueType} from "../Rating/Rating";

export type DefaultRatingType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}



export function UncontrollRating(props: DefaultRatingType) {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

        return (
            <div>
                <Star setValue={() => { setValue(value); props.onChange(value); }} selected={value > 0} value={1}/>
                <Star setValue={() => { setValue(value); props.onChange(value); }} selected={value > 1} value={2} />
                <Star setValue={() => { setValue(value); props.onChange(value); }} selected={value > 2} value={3} />
                <Star setValue={() => { setValue(value); props.onChange(value); }} selected={value > 3} value={4} />
                <Star setValue={() => { setValue(value); props.onChange(value); }} selected={value > 4} value={5} />
            </div>
        )
}

type StarPropsType = {
    selected: boolean;
    setValue: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {

    return <span className={styles.stars} onClick={() => props.setValue(props.value)}>
        {(props.selected) ? <b> star</b> : " star"}
    </span>
}
