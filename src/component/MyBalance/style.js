import styled from "styled-components";

export const MyBalanceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    background-color: ${props => props.theme.colors.softRed};
    padding: 1.5rem;
    border-radius: 18px;
    color: ${props => props.theme.colors.paleOrange};
    max-width: 500px;
    box-sizing: border-box;

    h3{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 1rem
    }
`