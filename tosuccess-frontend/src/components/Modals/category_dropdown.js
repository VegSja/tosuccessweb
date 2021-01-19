import { React, Component} from 'react'

import { Dropdown, DropdownButton } from 'react-bootstrap'

import ColorCircle from '../Category_Page/color_circle'
import CategoryDisplay from '../Activity_Page/Card/category_display'

import "../../style/activity_page.css"

export default class CategoryDropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            api_data : this.props.data,
            selected_value : null,
            title : this.props.title,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.title !== this.props.title){
            this.setState({title : this.props.title})
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
                <p className="dropdown-text">{category_name}</p>
                {/* <CategoryDisplay category={category_name} color={category_color} position_style="relative"/> */}
            </Dropdown.Item>)
        }
        return items
    }

    render(){
        if (this.state.title === ""){
            return(
                <DropdownButton style={{ position : "relative", display : "inline-block"}} title="Category" onSelect={this.props.onSelect}>
                    {this.createSelectItems()}
                </DropdownButton>
            )
        }
        else {
            return(
                <DropdownButton style={{ position : "relative", display : "inline-block"}} title={this.state.title} onSelect={this.props.onSelect}>
                    {this.createSelectItems()}
                </DropdownButton>
            )
        }

    }
}