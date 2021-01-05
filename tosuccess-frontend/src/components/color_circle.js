import { React, Component} from "react"

export default class ColorCircle extends Component{
    constructor(props){
        super(props);
        this.circleStyle = {
            margin: "1vh",
            display:"inline-block",
            position:'relative',
            backgroundColor: this.props.color,
            borderRadius: "50%",
            width: this.props.size,
            height: this.props.size,
            left:0,
            top:0,
        }
    }

    render(){
        return(
            <div style={this.circleStyle} />
        )
    }
}