import styled from "styled-components";

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 3rem;

    .bar{
        display: inline-block;
        width: 8vw;
        background-color: ${({greatest}) => greatest ? (props => props.theme.colors.cyan) : (props => props.theme.colors.softRed)};
        border-radius: 3px;
        max-width: 56px
    }
    
    .amount{
        display: none;
        font-size: 14px;
        background-color: ${props => props.theme.colors.darkBrown};
        color: ${props => props.theme.colors.paleOrange};
        padding: .2rem;
        border-radius: 4px;
        position: absolute;
        margin-bottom: 1rem;
        top: -30px;
        z-index: 2
    }

    .day{
        font-size: 14px;
        text-align: center
    }

    &:hover>.amount{
        display: block
    }

    &:hover{
        opacity: .8
    }
    
`