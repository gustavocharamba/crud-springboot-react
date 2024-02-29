import React, {useEffect, useState} from "react";

import { updateUser } from "../services/userService";

import { Container, ContentBox, Form, icons } from "./styledModal"
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({onClose, onUser}) => {

    const [user, setUser] = useState({
        name: onUser.name,
        email: onUser.email,
        phone: onUser.phone,
        city: onUser.city
    })

    async function handdleSubmit(obj){
        await updateUser(obj)
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setUser((prev) => {
            return {...prev, [name]: value}
        })

        console.log({name, value})
    }

    return(
        <Container>
            <ContentBox>
                <div className="close_box">
                    <h2>Register</h2>
                    <button onClick={onClose}><IoIosCloseCircleOutline style={icons}/></button>
                </div>
                <Form>
                    <div>
                        <h5>Name</h5>
                        <input type="text" value={user.name} onChange={handleChange} name="name" required></input>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email" value={user.email} onChange={handleChange} name="email" required></input>
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <input type="phone" value={user.phone} onChange={handleChange} name="phone" required></input>
                    </div>
                    <div>
                        <h5>City</h5>
                        <input type="city" value={user.city} onChange={handleChange} name="city" required></input>
                    </div>
                    <button >Create</button>
                </Form>
            </ContentBox>
        </Container>
    )
}

export default Modal
