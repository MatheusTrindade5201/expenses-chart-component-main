import Chart from "../Chart"
import { SpendingsWrapper, Title } from "./style"

const Spendings = () => {
    return(
        <SpendingsWrapper>
            <Title>Spendings - Last 7 days</Title>
            <Chart />
        </SpendingsWrapper>
    )
}

export default Spendings