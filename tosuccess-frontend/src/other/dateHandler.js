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
}