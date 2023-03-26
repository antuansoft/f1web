/**
 * Get minutes, seconds and milisecions
 */
function getRaceTime(currentTime){

    //console.log(currentTime)
    var minutes = Math.floor(currentTime / 60000);
    //console.log(minutes)
    minutes =  minutes = ('00' + minutes).slice(-2); //complete with 0s 
    var seconds = ((currentTime % 60000) / 1000).toFixed(1);
    //console.log(seconds)
    var dotindex = seconds.indexOf(".")
    if (dotindex > -1)
        seconds = seconds.substring(0,dotindex)
    //console.log(seconds )
    seconds = ('00' + seconds).slice(-2); //complete with 0s 
    //console.log(seconds)
    var miliseconds = Math.floor(((currentTime / 1000) - Math.floor(currentTime / 1000)) * 1000)  
    miliseconds = ('000' + miliseconds).slice(-3); //complete with 0s 
    //console.log(miliseconds)
    return minutes + ":" +  seconds + ":" + miliseconds;

}
/**
 * Get all race time in current lap
 * @param {*} driverRaceTime 
 * @param {*} lap 
 * @returns 
 */
function getTotalTime(driverRaceTime, lap){

    var total = 0
    //console.log(lap)
    //console.log(driverRaceTime)
    
    //for ( var index = 0; index == lap; index++){
    var index = 0
    while (index <= lap){
        total += driverRaceTime[index]
        index++
    }
    //console.log(total)
    return total

}

function isFastestLap(lapTimes, driversDictionary, driver, lap){
    currentLapTime = lapTimes[driver][lap]
    for (i = 0; i <= lap; i++ ){
        values = Object.values(driversDictionary)
        for (j = 0; j< values.length; j++ ){
            var numDriver = values[j].number
            try {
                var lapTime = lapTimes[numDriver][i]    
            } catch (error) {
                lapTime = Number.MAX_VALUE
            }
            if (Number(currentLapTime) > Number(lapTime))
                return false;
        }
    }
    return true;

}

function isPersonalBest(lapTimes, driver, lap){
    currentLapTime = lapTimes[driver][lap]
    for (i = 0; i <= lap; i++ ){
        
        var lapTime = lapTimes[driver][i]
        if (Number(currentLapTime) > Number(lapTime))
            return false;
    }
    return true;
}

function setTimeColorClass(isPersonalBestLap, isBestLap){
    
    if (isBestLap)
        return "fastestlap"
    else if (isPersonalBestLap)
        return "personalbest"
    else    
        return "normal"
}

function setTyreColorClass(currentTyre,tyreTypes){
    debugger;
    if (currentTyre != undefined){

        if ((tyreTypes.tyres[currentTyre]).toLowerCase() == 'soft'){
            return "softtyre"
        }
        else if ((tyreTypes.tyres[currentTyre]).toLowerCase() == 'medium'){
            return "mediumtyre"
        }
        else if ((tyreTypes.tyres[currentTyre]).toLowerCase() == 'hard'){
            return "hardtyre"
        }
    }
    else
        return ""
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
    if (difference.length==0)
        return []
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
/**
 * Chechk if element exists in list
 * @param {*} currentList 
 * @param {*} element 
 * @returns 
 */
function existsItem(currentList, element){
 
    var item = currentList.find(element => element == element);

    return (item != undefined)

}