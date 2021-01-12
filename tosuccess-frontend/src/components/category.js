import {React, Component} from 'react'

import ColorCircle from './color_circle'
import DeleteButton from './delete_button'

export default class Category extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : this.props.color,
            name : this.props.name,
            unique_id : this.props.unique_id,
        }
        this.api = this.props.api
    }

    onDelete(){
        this.api.delete_category(this.unique_id)
        .then(() => {
            //Refresh
            window.location.reload();
        })
        .catch(() => {
            this.api.sendRefreshToken()
            .then(() => {
                this.onDelete()
            })
        })
    }

    render(){
        return(
            <tr>
                <th><ColorCircle color={this.state.color} size={"5vh"}/></th>
                <th><h3>{this.state.name}</h3></th>
                <th><DeleteButton onClick={() => this.onDelete()} position="relative"/></th>
            </tr>
        )
    }
}