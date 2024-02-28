import styled from "styled-components"
import { colors } from "../global/globalColors"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    background-color: ${colors.opacity_gray};

    display: flex;
    justify-content: center;
    align-items: center;

`

export const ContentBox = styled.div`
    width: 35%;
    height:70%;

    border-radius: 16px;

    background-color: ${colors.gunmetal};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > .close_box {
        width: 85%;
        height: 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > button {
            height: 30px;
            width: 30px;
            border: 0;
            border-color: ${colors.cadet_gray};
            background-color: transparent;
            transition: 200ms;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & > h2{
            color: white;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    & > div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        & > input {
            width: 85%;
            height: 40px;
            border-radius: 24px;
            padding-left: 15px;
            align-self: center;
        }

        & > h5 {
            color: ${colors.cadet_gray};
            margin-left: 40px;
            margin-bottom: 5px;
        }
    }


    & > button {
        width: 80px;
        height: 40px;
    }
`

export const icons = {
    "height": "30px",
    "width": "30px",
    "color": "white"
}