import { React, Component} from 'react'

import { Dropdown, DropdownButton } from 'react-bootstrap'

import ColorCircle from '../Category_Page/color_circle'
import CategoryDisplay from '../Activity_Page/Card/category_display'

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
                {/* <ColorCircle color={category_color} size="2vh"/>
                {category_name} */}
                <CategoryDisplay category={category_name} color={category_color} position_style="relative"/>
            </Dropdown.Item>)
        }
        return items
    }

    render(){
        return(
            <DropdownButton style={{ position : "relative", display : "inline-block"}} title="Categories" onSelect={this.props.onSelect}>
                {this.createSelectItems()}
            </DropdownButton>
        )
    }
}