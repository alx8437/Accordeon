import React from "react";
import styles from "./Rating.module.css"


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
        return (
            <div>
                <Star value={1} setRatingValue={props.setRatingValue} selected={props.value > 0}/>
                <Star value={2} setRatingValue={props.setRatingValue} selected={props.value > 1}/>
                <Star value={3} setRatingValue={props.setRatingValue} selected={props.value > 2}/>
                <Star value={4} setRatingValue={props.setRatingValue} selected={props.value > 3}/>
                <Star value={5} setRatingValue={props.setRatingValue} selected={props.value > 4}/>
            </div>
        )

}

type StarPropsType = {
    selected: boolean;
    setRatingValue: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {

    const setRatingValue = () => {
        props.setRatingValue(props.value)
    }

    return <span className={styles.stars } onClick={setRatingValue}>
        {props.selected ? <b> star</b> : " star"}
    </span>
}
