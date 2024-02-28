import React, {useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom"
import { getUsers, deleteUser, updateUser, createUser } from '../../services/userService';

import { Container, ContentBox, SearchBox, UsersBox, icons, CreateUserBox } from './style'
import { MdEdit, MdDelete   } from "react-icons/md";

import Modal from '../../components/modal';

const Users = () => {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)

    const [users, setUsers] = useState([{
        name: "",
        email: "",
        phone: "",
        password: "",
        city: ""

    }]) 

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        try{
            const response = await getUsers()
            setUsers(response)
        } catch (error){
            console.log(error)
        }
    }

    function handdleCreate(){

        navigate("/create")
    }

    async function handdleDelete(id) {
        await deleteUser(id)
    }

    async function handdleEdit(obj){
        await updateUser(obj)
    }

    return(
        <Container>
                {showModal ? <Modal onClose={() => setShowModal(false)}/> : null}
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
                                        <button onClick={() => setShowModal(true)}><MdEdit style={icons}/></button>
                                    </div>
                                    <div>
                                        <button onClick={(event) => handdleDelete(user.id)}><MdDelete style={icons}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </UsersBox>
                <CreateUserBox>
                    <button className='create_button' onClick={(event) => handdleCreate()}>Create</button>
                </CreateUserBox>
            </ContentBox>
        </Container>
    )
}

export default Users