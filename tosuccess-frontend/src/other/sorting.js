export default function sort_array_based_on_key(array, key){
    var sorted =  array.sort( function(a,b) {
        var x = a[key];
        var y = b[key];
        if (Math.abs(parseInt(x)-parseInt(y)) > 10 && key=="date"){
            return
        }
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    return sorted
}