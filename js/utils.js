function getRaceTime(currentTime){

    console.log(currentTime)
    var minutes = Math.floor(currentTime / 60000);
    console.log(minutes)
    minutes =  minutes = ('00' + minutes).slice(-2); //complete with 0s 
    var seconds = ((currentTime % 60000) / 1000).toFixed(1);
    console.log(seconds)
    var dotindex = seconds.indexOf(".")
    if (dotindex > -1)
        seconds = seconds.substring(0,dotindex)
    console.log(seconds )
    seconds = ('00' + seconds).slice(-2); //complete with 0s 
    console.log(seconds)
    var miliseconds = Math.floor(((currentTime / 1000) - Math.floor(currentTime / 1000)) * 1000)  
    miliseconds = ('000' + miliseconds).slice(-3); //complete with 0s 
    console.log(miliseconds)
    return minutes + ":" +  seconds + ":" + miliseconds;

}

function getTotalTime(driverRaceTime, lap){

    var total = 0
    console.log(lap)
    console.log(driverRaceTime)
    
    //for ( var index = 0; index == lap; index++){
    var index = 0
    while (index <= lap){
        total += driverRaceTime[index]
        index++
    }
    //console.log(total)
    return total

}

/**
 * The elements from currentList that are not in otherList
 * 
 * @param {list of ....} currentList 
 * @param {list of ....} otherList 
 */
function difference(currentList, otherList){

    arr1 = removeItem(currentList,"---")
    arr2 = removeItem(otherList,"---")
    let difference = arr1.filter(x => !arr2.includes(x));
    return difference
}

/**
 * Remove item from list,
 * @param {List to remove} currentList 
 * @param {value to remove from list} element 
 * @returns 
 */
function removeItem(currentList, element){

    return currentList.filter(item => item !== element)

}