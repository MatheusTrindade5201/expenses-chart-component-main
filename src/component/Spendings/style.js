import styled from "styled-components";

export const SpendingsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    background-color: ${props => props.theme.colors.paleOrange};
    padding: 2rem;
    border-radius: 12px;
    color: ${props => props.theme.colors.darkBrown};
    max-width: 800px;
    margin-top: 1.5rem;
    box-sizing: border-box;
`

export const Title = styled.h2`
    font-weight: 600;
    font-size: 26px
`