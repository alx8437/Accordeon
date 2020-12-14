import React, {useState} from "react";

export default {
    title: "React.memo demonstration"
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users get")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Vanya", "Pete", "Olga", "Igor"])

    const addUser = () => {
        const newUsers = [...users, "John"]
        setUsers(newUsers)
    }

    return <React.Fragment>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </React.Fragment>
}

