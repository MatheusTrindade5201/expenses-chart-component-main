import styled from "styled-components";

export const TotalWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3, p{
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.colors.mediumBrown}
    }

    h2{
        font-size: 36px;
    }

    .percentage{
        color: ${props => props.theme.colors.darkBrown}
    }

    .rase {
        display: flex;
        flex-direction: column;
        align-items: flex-end
    }
`