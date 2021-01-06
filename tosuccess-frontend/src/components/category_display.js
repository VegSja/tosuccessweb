import {React, Component} from 'react'

import ColorCircle from './color_circle'

export default class CategoryDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            category : this.props.category,
            color : this.props.color,
            position_style : this.props.position_style
        }
    }
    render(){
        const containerStyle = {
            width : "fit-content",
            borderRadius:"10%",
            backgroundColor: this.state.color,
            position: this.state.position_style,

        }
        return(
            <div style={containerStyle}>
                <p style={{margin : "5px", color : "white", "font-size" : "1vw"}}>
                    {this.state.category}
                </p>
            </div>
        )
    }
}