import React, {useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom"
import axios from "axios"

import { Container, ContentBox, SearchBox, UsersBox, icons, CreateUserBox } from './style'
import { MdEdit, MdDelete   } from "react-icons/md";

const Users = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try{
            const response = await axios.get("http://localhost:8080/users")
            
            setUsers(response.data)
       } catch (error){
            console.log(error)
       }
    }

    const deleteUser = async (id) =>{
        try{
            await axios.delete(`http://localhost:8080/users/${id}`)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
        console.log(users)
    }, [])

    function handdleCreate(event){
        event.preventDefault()

        navigate("/create")
    }

    function handdleDelete(id){
        deleteUser(id)
        console.log(users)
    }

    return(
        <Container>
            <ContentBox>
                <SearchBox>
                    <input placeholder='Search...'/>
                </SearchBox>
                <UsersBox>
                    {users.map((user, i) => (
                        <div className='user' key={i}>
                            <div className='user_div'>
                                <div className='name_city_div'>
                                    <div className='teste'>
                                        <h6>Name</h6>
                                        <h5>{user.name}</h5>
                                    </div>
                                    <div className='teste'>
                                        <h6>City</h6>
                                        <h5>{user.city}</h5>
                                    </div>
                                </div>
                                <div className='email_telephone_div'>
                                    <div>
                                        <h6>Email</h6>
                                        <h5>{user.email}</h5>
                                    </div>
                                    <div>
                                        <h6>Telefone</h6>
                                        <h5>{user.phone}</h5>
                                    </div>
                                </div>
                                <div className='button_div'>
                                    <div>
                                        <button><MdEdit style={icons}/></button>
                                    </div>
                                    <div>
                                        <button onClick={handdleDelete(1)}><MdDelete style={icons}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </UsersBox>
                <CreateUserBox>
                    <button className='create_button' onClick={handdleCreate}>Create</button>
                </CreateUserBox>
            </ContentBox>
        </Container>
    )
}

export default Users