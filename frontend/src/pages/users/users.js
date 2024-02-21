import React, {useEffect, useState} from 'react'
import axios from "axios"

import { Container, ContentBox, SearchBox, UsersBox, icons } from './style'
import { MdEdit, MdDelete   } from "react-icons/md";

const Users = () => {

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
            <ContentBox>
                <SearchBox>
                    <input placeholder='Search...'/>
                </SearchBox>
                <UsersBox>
                    <div className='user'>
                        <div className='user_div'>
                            <div className='name_city_div'>
                                <div className='teste'>
                                    <h6>Name</h6>
                                    <h5>Gustavo</h5>
                                </div>
                                <div className='teste'>
                                    <h6>City</h6>
                                    <h5>Rio de Janeiro</h5>
                                </div>
                            </div>
                            <div className='email_telephone_div'>
                                <div>
                                    <h6>Email</h6>
                                    <h5>gustavocharamba@gmail.com</h5>
                                </div>
                                <div>
                                    <h6>Telefone</h6>
                                    <h5>99999999</h5>
                                </div>
                            </div>
                            <div className='button_div'>
                                <div>
                                    <button><MdEdit style={icons}/></button>
                                </div>
                                <div>
                                    <button><MdDelete style={icons}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </UsersBox>
            </ContentBox>
        </Container>
    )
}

export default Users