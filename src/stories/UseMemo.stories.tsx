import React, {useMemo, useState} from "react";
import {v1} from "uuid";
import {ItemType, SelectUpd} from "../components/SelectUpd/SelectUpd";


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

//Здесь отрисовывается наш массив пользователь на UI
const Users = React.memo((props: { users: Array<string> }) => {
    console.log("User is render")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

//Here show how use UseMemo => have two entity: counter and array Users. Users array is not render, when use counter.
export const HelpsToReactMemo = () => {
    console.log("HelpToReactMemo is render")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(
        ["Vanya", "Pete", "Olga", "Igor"])

    //т.к filter дает новый объект, компонента перерисовывается
    //Чтобы этого не было - проделываем useMemo.
    //Обязательно делать при map, filter, sort

    //Теперь компонента User, в которую в пропсы передается newArray булет перересовываться только при
    // добавлениии нового user (точнее при передачи нового массива, который создастся после выполнения функ addUser)
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUser = "Sveta"
        setUsers([...users, newUser]);
    }

    return <React.Fragment>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </React.Fragment>
}

//Home work
export const SelectsHomeWork = () => {
    const initialState = [
        {title: "Moscow", value: v1()},
        {title: "Minsk", value: v1()},
        {title: "Kiev", value: v1()},
        {title: "Samara", value: v1()},
        {title: "Krasnodar", value: v1()},
        {title: "Odessa", value: v1()},
    ]
    const [value, setValue] = useState(null);
    const [cities0, setCities0] = useState<Array<ItemType>>(initialState)
    const [cities1, setCities1] = useState<Array<ItemType>>(initialState)
    const [cities2, setCities2] = useState<Array<ItemType>>(initialState)


    const isRussiaCities = useMemo(() => {
        console.log("isRussia run")
        return cities0.filter(c => c.title === "Moscow" || c.title === "Samara" || c.title === "Krasnodar")
    }, [cities0])

    //Это пример - если отправлять массив без useMemo => будет отрисовываться всегда, при каждом рендоринге
    // const isRussiaCitiesNoMemo = () => {
    //     console.log("isRussiaCitiesNoMemo")
    //     return cities0.filter(c => c.title === "Moscow" || c.title === "Samara" || c.title === "Krasnodar")
    // }
    // const isRussiaCitiesNoMemoArr = isRussiaCitiesNoMemo()

    const isUkraineCities = useMemo(() => {
        console.log("isUkraine run")
        return  cities1.filter(c =>
                c.title === "Odessa" || c.title === "Kiev")
    }, [cities1])

    const isBelarusCities = useMemo(() => {
        console.log("isBelarus run")
        return  cities2.filter(c => c.title === "Minsk")
    }, [cities2])



    return <React.Fragment>
        <SelectUpd
            items={isRussiaCities}
            onChange={setValue}
            value={value}
        />
        {/*        Отправляем в исходный стейт новый объект, чтобы
        заставить компоненту перересоваться и продемонстрировать как работает useState*/}
        <button onClick={() => setCities0([...cities0])}>+ in Russian arr</button>
        <SelectUpd
            items={isUkraineCities}
            onChange={setValue}
            value={value}
        />
        {/*        Отправляем в исходный стейт новый объект, чтобы
        заставить компоненту перересоваться и продемонстрировать как работает useState*/}
        <button onClick={() => setCities1([...cities1])}>+ in Ukraine arr</button>
        <SelectUpd
            items={isBelarusCities}
            onChange={setValue}
            value={value}
        />
{/*        Отправляем в исходный стейт новый объект, чтобы
        заставить компоненту перересоваться и продемонстрировать как работает useState*/}
        <button onClick={() => setCities2([...cities2])}>+ in Belarus arr</button>
    </React.Fragment>
}