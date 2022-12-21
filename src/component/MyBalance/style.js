import styled from "styled-components";

export const MyBalanceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    background-color: ${props => props.theme.colors.softRed};
    padding: 1rem;
    border-radius: 12px;
    color: ${props => props.theme.colors.paleOrange};
`