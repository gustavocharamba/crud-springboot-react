import React, {useEffect, useState} from "react";

import { Container, ContentBox, Form, icons } from "./styledModal"
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({onClose, children}) => {
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
                        <input type="name"></input>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email"></input>
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <input type="phone"></input>
                    </div>
                    <div>
                        <h5>City</h5>
                        <input type="city"></input>
                    </div>
                    <button>Create</button>
                </Form>
            </ContentBox>
        </Container>
    )
}

export default Modal
