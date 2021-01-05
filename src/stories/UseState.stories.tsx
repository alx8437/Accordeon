import React from "react";
import {useState} from "react";

export default {
    title: 'useState'
}

function calculations() {
 //...complex calculations
    return 12324354.4543
}

//А что если initialState будет
export const Example = () => {

    //Здесь берется значение для initState, если так оставит, то при каждой отрисовке будет выполнятся
    // сложная функция, поэтому можно использовать useMemo, либо сразу и правильнее отдать ее вызов useState

    // const initialState = calculations()

    const [counter, setCounter] = useState(calculations) // [0, function(newValue) {}]


    return <React.Fragment>
       {/* Вместо  setCounter(counter + 1) мы можем использовать функцию, наподобе (state) => state + 1*/}
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </React.Fragment>
}
