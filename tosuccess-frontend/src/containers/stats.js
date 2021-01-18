import React, {useState} from "react";
import PieChart from "../components/Stats_Page/Graphs/pie_chart";
import LineChart from "../components/Stats_Page/Graphs/line_chart";

import DatePicker from "../components/Modals/date_picker";

import LoadingPage from "./Loading/LoadingPage"

import API_Connection from '../other/API_connection'
import StatsHandler from '../other/StatsHandler'


export default function Stats(){  
    //Using hooks to manage states
    const [serverRequest, setServerRequest] = useState({
        loading: true,
        start_date : null,
        end_date : null,
        statsHandler : null,
    });



    var routeState = localStorage.getItem("routeState");
    if(routeState) routeState = JSON.parse(routeState);

    var backend_access_token = routeState.backend_access_token
    var backend_refresh_token = routeState.backend_refresh_token

    var api = new API_Connection(backend_access_token, backend_refresh_token)

    var data_list = []

    var connectionCounter = 0


    const GET_date = () => {
        api.get_current_date()
        .then((response) => {
            var today = api.date.daynumber 
            var seven_days = (api.date.daynumber-7)%365
            getStats(seven_days, today)
        })
        .catch(()=> {
            GET_date()
        });
    }

    const getStats = (start, end) => {
        
        api.get_stats(start, end)
        .then((response) => {
            setServerRequest({
                loading : false,
                start_date : start,
                end_date : end,
                statsHandler : new StatsHandler(api.stats)
            })
        })
        .catch((error) => {
            console.log("Caught error:", error)
            api.sendRefreshToken()
            .then(()=>{
                connectionCounter += 1
                if (connectionCounter < 2){
                    getStats()
                }
            })
        })
    }

    const { loading, start_date, end_date, statsHandler } = serverRequest

    if(loading === true){
        GET_date()
    }

    if(loading === true){
        return(
            <div>
                <LoadingPage />
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Stats</h1>
                <PieChart labels={statsHandler.label_list} data={statsHandler.total_time_list} colors={statsHandler.color_list}/>
                <LineChart x_axis={statsHandler.date_list} dataset={statsHandler.data_set}/>
            </div>
        );
    }
}