import React, { useState } from "react"
import { useNavigate  } from "react-router-dom"

import { createUser } from "../../services/userService";
import { Container, ContentBox, CreateUserBox, icons, StyledLink } from "./style";

import { FaRegUserCircle } from "react-icons/fa";

const Create = () => {

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({})

    async function handleSubmit(){
        navigate("/")
        await createUser(newUser)

    }

    const handleChacnge = (event) => {
        const {name, value} = event.target

        setNewUser((prev) => {
            return {...prev, [name]: value}
        })
    }

    return(
        <Container>
            <ContentBox>
                <div className="top_bar">
                    <h1>Register</h1>
                    <StyledLink to={"/"}><FaRegUserCircle style={icons}/></StyledLink>
                </div>
                <CreateUserBox onSubmit={handleSubmit}>
                    <div>
                        <h3>Name</h3>
                        <input type="text" name="name" onChange={handleChacnge} required></input>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="email" name="email" onChange={handleChacnge} required></input>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <input type="number" name="phone" onChange={handleChacnge} required></input>
                    </div>
                    <div>
                        <h3>City</h3>
                        <input type="text" name="city" onChange={handleChacnge} required></input>
                    </div>
                    <div className="create_button">
                        <button type="submit">Create</button>
                    </div>
                </CreateUserBox>
            </ContentBox>
        </Container>
    )
}

export default Create;