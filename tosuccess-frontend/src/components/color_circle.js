import { React, Component} from "react"

export default class ColorCircle extends Component{
    constructor(props){
        super(props);
        this.circleStyle = {
            padding:0,
            margin:0,
            display:"inline-block",
            // position:'absolute',
            backgroundColor: this.props.color,
            borderRadius: "50%",
            width: "5vh",
            height: "5vh",
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