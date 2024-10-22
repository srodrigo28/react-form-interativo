import { useEffect, useState } from "react";

type UsersTypes = {
    id: string | number;
    name: string;
    age: number | string;
    salary: number | string
}

export function User(){
    const [users, setUsers] = useState<UsersTypes[]>([])
    const url = "http://localhost:3000/"
    useEffect( () => {
        fetch(url, {
            method: 'GET'
        })
        .then( (res) => res.json() )
        .then( (data) => { setUsers(data) })
        .catch((error)  => console.log(error))

    }, [users])

    return(
        <div>
            { 
                users.map( item  => (
                    <div key={item.id}>
                        <p> {item.name} </p>
                        <p> {item.age} </p>
                        <p> {item.salary} </p>
                    </div>
                )) 
            }
        </div>
    )
}