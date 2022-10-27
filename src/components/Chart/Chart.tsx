import React, { useState } from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props: any) => {
    const dataPointValues = props.dataPoints.map((x: any) => x.value);
    const totalMaximum = Math.max(...dataPointValues);
    console.log(totalMaximum)
    return <div className='chart'>
        {props.dataPoints.map((dataPoint: any) => (<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />))}
    </div>
}

export default Chart