export default function sort_array_based_on_key(array, key){
    console.log("Array before sort: ", array);
    var sorted =  array.sort( function(a,b) {
        var x = a[key];
        var y = b[key];
        if (Math.abs(parseInt(x)-parseInt(y)) > 10 ){
            return
        }
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    console.log("Array after sort: ", sorted);
    return sorted
}
