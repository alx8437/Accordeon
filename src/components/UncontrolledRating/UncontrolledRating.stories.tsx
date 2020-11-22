import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrollRating} from "./UncontrollRating";

export default {
    title: "UncontrolledRating",
    component: UncontrollRating
}

const callback = action("rating change")

export const EmptyStars = () => <UncontrollRating defaultValue={0} onChange={callback} />
export const Rating1 = () => <UncontrollRating defaultValue={1} onChange={callback} />
export const Rating2 = () => <UncontrollRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrollRating defaultValue={3} onChange={callback} />
export const Rating4 = () => <UncontrollRating defaultValue={4} onChange={callback} />
export const Rating5 = () => <UncontrollRating defaultValue={5} onChange={callback} />


