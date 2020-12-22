import {React, Component} from 'react';

//Bootstrap imports
import {Table} from 'react-bootstrap';

import Day from './day';

import "../style/activity_page.css"

var activitiesson = [
    {date : "07.11.2020", activity_name : 'Halla', start_time : "13.00", end_time : "14.00"},
    {date : "07.11.2020", activity_name : 'Lol', start_time : "14.00", end_time : "15.00"},
    {date : "09.11.2020", activity_name : 'Skole', start_time : "10.00", end_time : "12.00"},
    {date : "07.11.2020", activity_name : 'Skole', start_time : "08.00", end_time : "12.00"},
    {date : "07.11.2020", activity_name : 'Skole', start_time : "08.00", end_time : "12.00"},
    {date : "07.11.2020", activity_name : 'Skole', start_time : "08.00", end_time : "12.00"},
    {date : "07.11.2020", activity_name : 'Skole', start_time : "08.00", end_time : "12.00"},
    {date : "08.11.2020", activity_name : 'Åse', start_time : "20.00", end_time : "21.00"},
];

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
    }

    render(){
        return (
            <Table>
                {this.renderDays()}
            </Table>
        )
    }
    //Creates 'dict' with data from JSON
    CreateActivityObject(activities_json){
        sort_array_based_on_key(activities_json, "date"); //Sorts activities based on start time. This way we have the dates in order
        var activities = {};
        for(var i=0; i<activities_json.length; i++){
            if (!(activities_json[i].date in activities)){
                activities[activities_json[i].date] = [];
            }
            activities[activities_json[i].date].push(activities_json[i]);
        }
        
        for(const date in activities){
            sort_array_based_on_key(activities[date], "start_time"); //Sorts the start time of each activity on a given date.
        }
        return activities;
    }

    //Use create a activity card based on data from object
    renderDays(){
        var activities = this.CreateActivityObject(activitiesson);
        var items = [];
        for(const key in activities){
            items.push(<th><Day date={key} activities_for_day={activities[key]}/></th>);
        }
        return items;
    }
}