import {React, Component} from 'react'

import ColorCircle from './color_circle'

export default class CategoryDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            category : this.props.category,
            color : this.props.color,
        }
    }
    render(){
        return(
            <div>
                <ColorCircle color={this.state.color} size="2vh" /> {this.state.category}
            </div>
        )
    }
}