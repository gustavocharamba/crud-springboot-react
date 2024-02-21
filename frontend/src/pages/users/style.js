import styled from "styled-components";
import { colors } from "../../global/globalColors"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.gunmetal};
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 600px;
    background-color: ${colors.gray};
`

export const SearchBox = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > input {
        height: 50%;
        width: 80%;
        border-radius: 16px;
        border: 0;
        padding-left: 15px;
    }
`

export const UsersBox = styled.div`
    height: 90%;
    overflow: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    .user {
        margin-top: 25px;
        border-radius: 24px;
        height: 100px;
        width: 80%;
        background-color: ${colors.cadet_gray};
        display: flex;
        justify-content: center;
        align-items: center;


        .user_div {
            height: 100%;
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;

            .name_city_div {
                width: 30%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                div {
                    height: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }

            .email_telephone_div {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                div {
                    height: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }

            .button_div {
                width: 20%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                div {
                    height: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    button {
                        height: 30px;
                        width: 30px;
                        border: 0;
                        border-color: ${colors.cadet_gray};
                        background-color: transparent;
                        transition: 200ms;

                        :hover{
                            filter: opacity(65%);
                        }
                    }
                }

            }
        }


    }
`

export const icons = {
    "height": "25px",
    "width": "25px"
}