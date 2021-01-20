import {React, Component} from 'react'

import ColorCircle from './color_circle'
import DeleteButton from '../Input/delete_button'

import "../../style/general.css"

export default class Category extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : this.props.color,
            name : this.props.name,
            unique_id : this.props.unique_id,
        }
        this.api = this.props.api

        this.categoryDisplayStyle = {
            "diplay": "inline-block",
        }
    }



    onDelete(){
        this.api.delete_category(this.state.unique_id)
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
            <tr className="table-entry-category">
                <th className="table-entry-category">
                    <ColorCircle style={this.categoryDisplayStyle} color={this.state.color} size={"5vh"}/>
                </th>
                <th>
                <p style={this.categoryDisplayStyle} className="category-name-table">{this.state.name}</p>
                </th>
                <th>
                <DeleteButton style={this.categoryDisplayStyle} onClick={() => this.onDelete()} position="relative"/></th>
            </tr>
        )
    }
}