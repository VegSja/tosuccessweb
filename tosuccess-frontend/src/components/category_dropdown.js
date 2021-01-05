import { React, Component} from 'react'

import { Dropdown, DropdownButton } from 'react-bootstrap'

import ColorCircle from './color_circle'

export default class CategoryDropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            api_data : this.props.data,
            selected_value : null,
        }
    }

    createSelectItems(){
        var items = []
        for(var key in this.state.api_data){
            var category_name = this.state.api_data[key].name
            var category_color = this.state.api_data[key].color
            items.push(
            <Dropdown.Item>
                <ColorCircle color={category_color} size="2vh"/>
                {category_name}
            </Dropdown.Item>)
        }
        return items
    }

    render(){
        return(
            <DropdownButton title="Categories" onSelect={this.props.onSelect}>
                {this.createSelectItems()}
            </DropdownButton>
        )
    }
}