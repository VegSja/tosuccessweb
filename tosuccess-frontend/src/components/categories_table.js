import { React, Component } from 'react' 
import { Table} from 'react-bootstrap'

import Category from './category'

export default class CategoriesTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            backend_access_token : this.props.backendAccessToken,
            api_connection : this.props.api_connection,

            server_error : false,
            server_error_message : null,
            categories : this.props.categories,
        }
    }

    render_categories(){
        var items = []
        for(var categories in this.state.categories){
            var category_son = this.state.categories[categories]
            items.push(<Category color={category_son.color} name={category_son.name} unique_id={category_son.unique_id} api={this.state.api_connection}/>)
        }
        return items
    }

    render(){
        return(
            <Table hover>
                <thead>
                </thead>
                <tbody>
                        {this.render_categories()}
                </tbody>
            </Table>
        )
    }
}