export default class StatsHandler{
    constructor(stats_data_from_server){
        this.serverData = stats_data_from_server
        this.data_obj = this.parseToDataObj()
        this.label_list = this.parseToLabelList()
        this.total_time_list = this.parseToTotalTime()
        this.color_list = this.parseToColorList()

        //For line chart
        this.date_list = this.parseToDateList()
        this.data_set = this.parseToDataSet()

        console.log(this.data_set)
    }

    parseToDataObj(){
        return(JSON.parse(this.serverData[0].data))
    }

    parseToLabelList(){
        var list = []
        for(var key in this.data_obj){
            list.push(key)
        }
        return list
    }

    parseToTotalTime(){
        var list = []
        for(var key in this.data_obj){
            list.push(this.data_obj[key]["total_time"])
        }
        return list
    }

    parseToColorList(){
        var list = []
        for(var key in this.data_obj){
            list.push(this.data_obj[key]["color"])
        }
        return list
    }

    parseToDateList(){
        var list = []
        for(var key in this.data_obj[this.label_list[0]]["date_data"]){ //Will take the first object since every category will have the same dates
            list.push(key)
        }
        return list
    }

    parseToDataSet(){
        var dataSet = []
        for(var key in this.data_obj){
            var data = []
            var obj_to_fill = {}

            obj_to_fill["label"] = key
            
            for(var date_data in this.data_obj[key]["date_data"]){
                data.push(this.data_obj[key]["date_data"][date_data])
            }
            obj_to_fill["data"] = data
            obj_to_fill["fill"] = false
            obj_to_fill["borderColor"] = this.data_obj[key]["color"]

            

            dataSet.push(obj_to_fill)
        }
        return dataSet

    }
}