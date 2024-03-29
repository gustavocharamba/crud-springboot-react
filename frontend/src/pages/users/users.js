import React, {useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom"
import { getUsers, deleteUser } from '../../services/userService';

import { Container, ContentBox, SearchBox, UsersBox, icons, CreateUserBox } from './style'
import { MdEdit, MdDelete   } from "react-icons/md";

import Modal from '../../components/modal';

const Users = () => {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)

    const [users, setUsers] = useState([])

    const [user, setUser] = useState({})

    const [search, setSearch] = useState("")

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
        
        const response = await getUsers()
        setUsers(response)
    }

    function handdlEdit(obj){
        setUser(obj)
        setShowModal(true)
    }

    const searchItems = (searchValue) => {
        setSearch(searchValue)
    
        users.filter((item) => {
            return Object.values(item).join("").toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }

    return(
        <Container>
                {showModal ? <Modal onClose={() => setShowModal(false)} onUser={user}/> : null}
            <ContentBox>
                <SearchBox>
                    <input placeholder='Search...' onChange={(event) => searchItems(event.target.value)}/>
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
                                        <button onClick={() => handdlEdit(user)}><MdEdit style={icons}/></button>
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
                    <button className='create_user_button' onClick={handdleCreate}>Create User</button>
                </CreateUserBox>
            </ContentBox>
        </Container>
    )
}

export default Users