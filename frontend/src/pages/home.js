import React, {useEffect, useState} from 'react'

import axios from "axios"

const Home = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try{
            const response = await axios.get("http://localhost:8080/users")

            console.log(response.data)
       } catch (error){
        console.log(error)
       }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return(
        <div>
            Home
        </div>
    )
}

export default Home