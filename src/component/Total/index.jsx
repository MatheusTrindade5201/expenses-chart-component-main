import { TotalWrapper } from "./style"

const Total = () => {
    return (
        <TotalWrapper>
            <div className="total">
                <h3>Total this month</h3>
                <h2>$478.33</h2>
            </div>
            <div className="rase">
                <p className="percentage">+2.4%</p>
                <p>from last month</p>
            </div>
        </TotalWrapper>
    )
}

export default Total