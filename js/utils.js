function getRaceTime(currentTime){

    console.log(currentTime)
    var minutes = Math.floor(currentTime / 60000);
    console.log(minutes)
    var seconds = ((currentTime % 60000) / 1000).toFixed(0);
    console.log(seconds )
    var miliseconds = Math.floor(((currentTime / 1000) - Math.floor(currentTime / 1000)) * 1000)  
    miliseconds = ('0000' + miliseconds).slice(-3); //round to 3 decimals 
    console.log( Math.floor(((currentTime / 1000) - Math.floor(currentTime / 1000)) * 1000)  )
    return minutes + ":" +  seconds + ":" + miliseconds;

}