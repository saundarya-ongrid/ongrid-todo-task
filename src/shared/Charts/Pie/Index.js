import React from 'react'
import Chart from 'react-apexcharts'
export const PieChart = (props) => {
    return (
        <div>
             <Chart width={310} options={props.options} series={props.series} type="pie"  />
        </div>
    )
}
