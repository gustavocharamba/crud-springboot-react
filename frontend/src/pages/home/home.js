import React, {useEffect, useState} from 'react'
import axios from "axios"

import { Container } from './style'

const Home = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try{
            const response = await axios.get("http://localhost:8080/users")
            
            setUsers(response.data)
       } catch (error){
        console.log(error)
       }
    }

    useEffect(() => {
        getUsers()
        console.log(users)
    }, [])

    return(
        <Container>
            
        </Container>
    )
}

export default Home