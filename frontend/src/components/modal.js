import React, {useEffect, useState} from "react";

import { getOneUser } from "../services/userService";

import { Container, ContentBox, Form, icons } from "./styledModal"
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({onClose, onUser}) => {


    console.log(onUser)
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
                        <input type="name" value={onUser.name}></input>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email" value={onUser.email}></input>
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <input type="phone" value={onUser.phone}></input>
                    </div>
                    <div>
                        <h5>City</h5>
                        <input type="city" value={onUser.city}></input>
                    </div>
                    <button >Create</button>
                </Form>
            </ContentBox>
        </Container>
    )
}

export default Modal
