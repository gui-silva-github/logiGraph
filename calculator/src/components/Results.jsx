import { useEffect, useState } from "react"
import { calculateInvestmentResults, formatter } from "../util/investment.js"

import Chart from "react-google-charts"

export default function Results({input}){
    
    const resultsData = calculateInvestmentResults(input)
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    
    return (
        <>
            <h2 style={{textAlign: "center"}}>Gráfico de Investimento</h2>
            <div className="chart">
                <LineChart historicalData={resultsData}/>
            </div>
            <h2 style={{textAlign: "center"}}>Tabela de Investimento</h2>
            <table id="result">
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Investimento</th>
                        <th>Interesse (Ano)</th>
                        <th>Total de Interesse</th>
                        <th>Capital Investido</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map(yearData => {
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                        return <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

function LineChart({historicalData}){
    const [data, setData] = useState([['Ano', 'Valor']])

    useEffect(()=>{
        let dataCopy = [['Ano', 'Valor']]

        if(historicalData.length > 0){
            historicalData.map((item)=>{
                dataCopy.push([item.year, item.valueEndOfYear])
            })
            setData(dataCopy)
        }
    }, [historicalData])

    return (
        <Chart
        chartType="LineChart"
        data={data}
        />
    )
}