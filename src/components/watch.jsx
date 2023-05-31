import React, { Fragment, useState } from "react";

var timerInterval=-1;
let startTime;
let elapsedTime = 0;
let isRunning = false;
export const Watch = ()=>{
    const [time , changeTime ] = useState("00:00:00");
    const [actionFlag, changeAction] = useState(true);

// Start the stopwatch
function startStopwatch() {
    if(timerInterval!==-1){
        clearInterval(timerInterval);
        timerInterval = setInterval(updateStopwatch,10);
        changeAction((actionFlag)=> ! actionFlag);
    }

    if (startTime==null){
        startTime = new Date();
        timerInterval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
        isRunning = true;
    }

        console.log(timerInterval);
}

// Update the stopwatch display
function updateStopwatch() {
  const now = new Date();
  elapsedTime = now - startTime;
  changeTime( formatTime(elapsedTime));
}

// Format time in milliseconds to a human-readable format
function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const millisecondsDisplay = Math.floor((milliseconds % 1000) / 10)
    .toString()
    .padStart(2, '0');
  return `${hours}:${minutes}:${seconds}.${millisecondsDisplay}`;
}

// Stop the stopwatch
function stopStopwatch() {
//   console.log("")
  console.log(timerInterval);
  clearInterval(timerInterval);
  changeAction((actionFlag)=> ! actionFlag);

}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timerInterval);
  changeTime("00:00:00");
  elapsedTime = 0;
  changeAction((actionFlag)=> ! actionFlag);
  timerInterval=-1;
  startTime=null;
  isRunning=false;
}



    return (
        <Fragment>
            <div className="row">
                <div className="card z-depth-0 transparent col s12">
                    <div className="clock-box">
                    <div class="clock">
                        <span className="time">{time}</span>
                    </div>
                    </div>
                    <div class={`card-actions ${actionFlag ? '' : 'hide'}`} >
                        <a className={`btn ${isRunning ? 'disabled':''}`}  onClick={startStopwatch}><i className="large material-icons left">play_arrow</i> start</a>
                        <a className={`btn ${isRunning ? '':'disabled'}`} onClick={stopStopwatch}> <i className="large material-icons left">pause</i>pause </a>
                        {/* <a className="btn"> <i className="large material-icons left">stop</i> stop </a> */}
                    </div>
                    <div class ={`card-actions ${actionFlag ? 'hide' : ''}`} >
                        <a className="btn" onClick={resetStopwatch}> <i className="large material-icons left">replay</i> reset </a>
                        <a className="btn"  onClick={startStopwatch}><i className="large material-icons left">play_arrow</i> resume</a>
                        {/* <a className="btn"> <i className="large material-icons left">stop</i> stop </a> */}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}