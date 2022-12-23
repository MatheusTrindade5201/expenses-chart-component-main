import { Bar, ChartWrapper } from "./style"
import json from '../../assets/json/data.json'

const Chart = () => {

    const data = json;
    let max = 0
    for(let i = 0; i < data.length; i++){
        if(data[i].amount > max){
            max = data[i].amount
        }
    }

    return (
        <ChartWrapper >
            {data.map(data => <Bar key={data.day} greatest={data.amount === max ? true : false}><p className="amount">${data.amount}</p><span className="bar" style={{height: `${data.amount*2.5}px`}}></span><p className="day">{data.day}</p></Bar>)}
        </ChartWrapper>
    )
}

export default Chart