import {React, Component} from 'react';

//Bootstrap imports
import {Table, Spinner, Alert} from 'react-bootstrap';

import Day from './day';

//Non-react classes
import backend_authorized from "./sessionHandler"

import "../style/activity_page.css"

function sort_array_based_on_key(array, key){
    return array.sort( function(a,b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


export default class ActivityTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            backend_access_token : this.props.backendAccessToken,
            api_connection : this.props.api_connection,
        }

        
    }

    componentDidMount(){
        //TODO: Test backendaccess. Wait till connection is authorized before doing anything else
        //API connection data retrieval
        this.state.api_connection.get_current_date().then((response) => {
            this.currentdate = this.state.api_connection.date;
            this.currentDayNumber = this.currentdate.daynumber;
            console.log(this.currentDayNumber);


            this.state.api_connection.get_activities(this.currentDayNumber, 4).then((response) => {
                this.activities = this.state.api_connection.activities;
                console.log(this.activities);
                this.setState({ loading: false });
            });
        });
    }

    //Creates 'dict' with data from JSON
    CreateActivityObject(activities_json){
        sort_array_based_on_key(activities_json, "date_string"); //Sorts activities based on start time. This way we have the dates in order
        var activities = {};
        for(var i=0; i<activities_json.length; i++){
            if (!(activities_json[i].date_string in activities)){
                activities[activities_json[i].date_string] = [];
            }
            activities[activities_json[i].date_string].push(activities_json[i]);
        }
        
        for(const date_string in activities){
            sort_array_based_on_key(activities[date_string], "start_time"); //Sorts the start time of each activity on a given date.
        }
        return activities;
    }

    //Use create a activity card based on data from object
    renderDays(){
        var activities = this.CreateActivityObject(this.activities);
        var items = [];
        for(const key in activities){
            items.push(<th><Day date={key} activities_for_day={activities[key]}/></th>);
        }
        if (items.length == 0){
            return (<Alert variant='warning'>ALERT: No activities found for these days. To add an activity click the add button</Alert>)
        }
        return items;
    }

    render(){
        return (
            <div className="table-div">
                {this.state.loading ? <Spinner animation="grow" className="loading-table" /> : <Table> {this.renderDays()} </Table>  }
            </div>
        )
    }
}