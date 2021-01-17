import {React, Component} from "react"
import { Doughnut } from 'react-chartjs-2'




const PieChart = (props) => {
    const pieOptions = {
        legend: {
          display: false,
          position: "left",
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
    };

    const pieData = {
        maintainAspectRatio: false,
        responsive: false,
        labels: props.labels,
        datasets: [
          {
            data: props.data,
            backgroundColor : props.colors,
          }
        ]
    }

    const divStyle = {
      width : "50%",
      float : "right",
    }
    return (
        <div style={divStyle}>
            <Doughnut
                data={pieData}
                options={pieOptions}
            />
        </div>
    )
}

export default PieChart