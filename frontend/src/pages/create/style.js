import { styled } from "styled-components"
import { colors } from "../../global/globalColors"
import { Link } from "react-router-dom"

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
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 600px;
    background-color: ${colors.gray};

    .top_bar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        height: 10%;

    }
`

export const CreateUserBox = styled.form`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > div {
        width: 90%;
        margin-top: 35px;

        & > input {
            width: 100%;
            height: 40px;
            border-radius: 24px;
            border: 0;
            padding-left: 15px;
            text-decoration: none;
            
        }

        & > h3 {
            margin-left: 15px;
            margin-bottom: 10px;
        }
    }

    .create_button {
        display: flex;
        align-items: center;
        justify-content: center;

        & > button{
            margin-top: 35px;
            width: 30%;
            height: 40px;
            border-radius: 32px;
            border: 0;
            font-size: 16px;
            font-weight: bold;
            transition: 250ms;
            cursor: pointer;
            background-color: ${colors.cadet_gray};

        }
    }
`

export const icons = {
    "height": "40px",
    "width": "40px"
}

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 40px;
    height: 40px;
    color: black;

    :visited {
        text-decoration: none;
    }
`