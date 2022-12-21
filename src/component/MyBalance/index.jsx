import { MyBalanceWrapper } from "./style"
import logo from '../../assets/images/logo.svg'

const MyBalance = () => {
    return(
        <MyBalanceWrapper>
            <div className="balance">
                <h3>My balance</h3>
                <h2>$921.48</h2>
            </div>
            <img src={logo}/>
        </MyBalanceWrapper>
    )
}

export default MyBalance