import { React } from "react"
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    const lineOptions = {
        legend: {
            display: false,
            position: "left",
          },
          elements: {
            arc: {
              borderWidth: 0
            }
          },
    }

    const lineData = {
        labels: props.x_axis,
        datasets : props.dataset,
    }

    const divStyle = {
        width : "50%",
        display : "left",
    }

    return (
        <div style={divStyle}>
            <Line 
                data={lineData}
            />
        </div>
    )
}

export default LineChart