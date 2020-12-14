import React, {useMemo} from "react";
import {useState} from "react";


export default {
    title: "UseMemo demonstration"

}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {  //useMemo, вычисли эти значения и запомни, пока a не поменяется
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])




    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <React.Fragment>
        <div>Compute factorial</div>
        <div> A variable
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        </div>
        <div> B variable
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        </div>
        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </React.Fragment>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users Secret component")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log("HelpToReactMemo component")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Vanya", "Pete", "Olga", "Igor"])

    //т.к filter дает новый объект, компонента перерисовывается
    //const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)

    //Чтобы этого не было - проделываем useMemo.
    //Обязательно делать при map, filter, sort
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    return <React.Fragment>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </React.Fragment>
}
