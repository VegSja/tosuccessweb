import React, {useState} from "react";
import PieChart from "../components/Stats_Page/Graphs/pie_chart";
import LineChart from "../components/Stats_Page/Graphs/line_chart";

import DatePicker from "../components/Modals/date_picker";

import LoadingPage from "./Loading/LoadingPage"

import API_Connection from '../other/API_connection'
import StatsHandler from '../other/StatsHandler'


export default function Stats(){  
    //Using hooks to manage states
    const [loading, setLoading] = useState(true);
    const [statsHandler, setStatsHandler] = useState(null);

    //For date picker
    const [start_date_to_view, setStartDate] = useState(new Date());
    const [end_date_to_view, setEndDate] = useState(new Date()); 



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
            setStartDate((api.date.daynumber-7)%365)
            setEndDate(api.date.daynumber)
            getStats()
        })
        .catch(()=> {
            GET_date()
        });
    }

    const getStats = () => {
        
        api.get_stats(10, 17)
        .then((response) => {
            setStatsHandler(new StatsHandler(api.stats))
            setLoading(false)
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

    const onStartDateChanged = (e) => {
        setStartDate(e.target.value)
    }

    const onEndDateChanged = (e) => {
        setEndDate(e.target.value)
    }

    if(statsHandler === null){
        getStats()
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