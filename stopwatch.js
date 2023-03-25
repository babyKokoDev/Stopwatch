let count = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let interval = 0
let timeRunning = false


let startTimer = () => {
    count++
    minutes = Math.floor((count/100)/60)
    seconds = Math.floor((count/100) - (minutes * 60))
    milliseconds = Math.floor(count - (seconds * 100) - (minutes * 6000))

    document.querySelector('#minutes').innerHTML = leadingZero(minutes)
    document.querySelector('#seconds').innerHTML = leadingZero(seconds)
    document.querySelector('#m-seconds').innerHTML = leadingZero(milliseconds)
    
}


let startButton = document.querySelector('#start-btn')
startButton.addEventListener('click', function(){
      if (timeRunning == false){
        interval = setInterval(startTimer, 10)
        timeRunning = true
      }
      
})

let stopButton = document.querySelector('#stop-btn')
stopButton.addEventListener('click', function(){
    clearInterval(interval)
})

let resetButton = document.querySelector('#reset-btn')
resetButton.addEventListener('click', function(){
    clearInterval(interval)
     count = 0
     minutes = 0
     seconds = 0
     milliseconds = 0
     interval = 0
     timeRunning = false
     document.querySelector('#minutes').innerHTML = '00'
     document.querySelector('#seconds').innerHTML = '00'
     document.querySelector('#m-seconds').innerHTML = '00'
})





let leadingZero = (time) => {
    if (time < 10){
        return "0" + time
    }
    else{
        return time
    }
}