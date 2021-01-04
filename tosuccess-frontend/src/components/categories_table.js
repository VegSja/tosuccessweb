import { React, Component } from 'react' 
import { Table } from 'react-bootstrap'

import ColorCircle from './color_circle'

export default class CategoriesTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            backend_access_token : this.props.backendAccessToken,
            api_connection : this.props.api_connection,
        } 
    }

    componentDidMount(){
        this.sendGetRequest()
    }

    sendGetRequest(){
        this.state.api_connection.get_categories().then((response) => {
            this.categories = this.state.api_connection.categories;
            console.log(this.categories);
            this.setState({ loading: false });
        });
    }

    render_categories(){
        var items = []
        for(var categories in this.categories){
            var category_son = this.categories[categories]
            items.push(<tr>
                <th><ColorCircle color={category_son.color} /></th>
                <th><h3>{category_son.name}</h3></th>
            </tr>)
        }
        return items
    }

    render(){
        this.render_categories()
        return(
           <Table hover>
               <thead>
                   <tr>
                        <th>Color</th>
                        <th>Name</th>
                   </tr>
               </thead>
               <tbody>
                    {this.render_categories()}
               </tbody>
           </Table>
        )
    }
}