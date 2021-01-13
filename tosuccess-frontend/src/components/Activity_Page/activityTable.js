import {React, Component} from 'react';

//Bootstrap imports
import {Table, Spinner, Alert} from 'react-bootstrap';

import Day from './day';




//Non-react classes
import sort_array_based_on_key from "../../other/sorting"
import DateHandler from "../../other/dateHandler"

import "../../style/activity_page.css"

//TODO : Figure out why this doesnt rerender
export default class ActivityTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            backend_access_token : this.props.backendAccessToken,
            api_connection : this.props.api_connection,
            day_number_to_view : this.props.day_number_to_view,

            colorList : this.props.colorList,

            activities : sort_array_based_on_key(this.props.activities, "date"),
        }   
        this.dateHandler = new DateHandler();
    }

    //Creates 'dict' with data from JSON
    CreateActivityObject(activities_json){
        var activities = {};
        for(var i=0; i<activities_json.length; i++){
            if (!(activities_json[i].date_string in activities)){
                activities[activities_json[i].date_string] = [];
            }
            activities[activities_json[i].date_string].push(activities_json[i]);
        }
        return activities;
    }

    //Use create a activity card based on data from object
    renderDays(){
        var activities = this.CreateActivityObject(this.state.activities);
        var items = [];
        for(const key in activities){
            items.push(<th><Day date={key} activities_for_day={activities[key]} colorList={this.state.colorList} api={this.props.api}/></th>);
        }
        if (items.length == 0){
            return (<Alert variant='warning'>ALERT: No activities found for these days. To add an activity click the add button</Alert>)
        }
        return items;
    }

    render(){
        return(
            <div className="table-div">
                <Table> {this.renderDays()} </Table>
            </div>
        )
    }
}