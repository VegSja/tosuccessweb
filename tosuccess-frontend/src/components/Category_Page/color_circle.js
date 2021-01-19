import { React, Component} from "react"

export default class ColorCircle extends Component{
    constructor(props){
        super(props);
        this.circleStyle = {
            "margin-right": "1vh",
            display:"inline-block",
            position:'relative',
            backgroundColor: this.props.color,
            borderRadius: 10,
            width: 5,
            height: 30,
        }
    }

    render(){
        return(
            <div style={this.circleStyle} />
        )
    }
}