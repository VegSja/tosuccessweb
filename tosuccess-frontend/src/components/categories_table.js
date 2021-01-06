import { React, Component } from 'react' 
import { Table, Spinner, Alert } from 'react-bootstrap'

import { Redirect } from 'react-router' 

import ColorCircle from './color_circle'

export default class CategoriesTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            backend_access_token : this.props.backendAccessToken,
            api_connection : this.props.api_connection,

            server_error : false,
            server_error_message : null,
        } 
    }

    componentDidMount(){
        this.sendGetRequest()
    }

    sendGetRequest(){
        this.state.api_connection.get_categories()
        .then((response) => {
            this.categories = this.state.api_connection.categories;
            this.setState({ loading: false });
        })
        .catch((response) => {
            this.state.api_connection.sendRefreshToken() //Send refresh token
            .then((response) => {
                console.log("Error. Trying again")
                this.sendGetRequest() //If successfully retrieved token. Try again
            })
            .catch((error) => {
                this.handleServerError(error.request.statusText) //If not display error
            })
        })
    }

    handleServerError(error){
        console.log("Caught error: ", error)
        this.setState({ server_error : true, server_error_message : error })
    }

    render_categories(){
        var items = []
        for(var categories in this.categories){
            var category_son = this.categories[categories]
            items.push(<tr>
                <th><ColorCircle color={category_son.color} size={"5vh"}/></th>
                <th><h3>{category_son.name}</h3></th>
            </tr>)
        }
        return items
    }

    render(){
        if(this.state.loading){
            if(this.state.server_error){
                if(this.state.server_error_message === "Unauthorized"){
                    return(<div><Redirect to="/landing" /></div>)
                }
                else{
                    return(
                        <Alert variant="danger">
                            Server error: {this.state.error_message}
                        </Alert>)
                }
            }
            return(<Spinner animation="grow" className="loading-table"/>)
        }
        else{
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
}