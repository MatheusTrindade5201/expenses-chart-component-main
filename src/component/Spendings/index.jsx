import Chart from "../Chart"
import Total from "../Total"
import { SpendingsWrapper, Title } from "./style"

const Spendings = () => {
    return(
        <SpendingsWrapper>
            <Title>Spendings - Last 7 days</Title>
            <Chart />
            <Total />
        </SpendingsWrapper>
    )
}

export default Spendings