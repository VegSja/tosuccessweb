export default class DateHandler{

    timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        if (rhours < 10){
            var strHours = "0" + rhours;
        }
        else{
            var strHours = rhours;
        }

        if (rminutes < 10){
            var strMinutes = "0" + rminutes;
        }
        else{
            var strMinutes = rminutes;
        }

        return strHours + ":" + strMinutes
    }

    convertDateToDDMMMMYYYY(date_string){
        var values_arr = date_string.split("-");
        var year = values_arr[0]
        var month_as_int = parseInt(values_arr[1]);
        var day = values_arr[2]
        let month
        //Convert to correct month
        switch(month_as_int) {
            case 1:
                month = "January"
                break;
            case 2:
                month = "February"
                break;
            case 3:
                month = "March"
                break;
            case 4:
                month = "April"
                break;
            case 5:
                month = "May"
                break;
            case 6:
                month = "June"
                break;
            case 7:
                month = "July"
                break;
            case 8:
                month = "August"
                break;
            case 9:
                month = "September"
                break;
            case 10:
                month = "October"
                break;
            case 11:
                month = "November"
                break;
            case 12:
                month = "December"
                break;
        }
        return day + ". " + month + " " + year;
    }
}