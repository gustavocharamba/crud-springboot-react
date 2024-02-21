import { styled } from "styled-components"
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