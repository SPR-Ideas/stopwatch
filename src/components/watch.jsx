import React, { Fragment, useContext, useState } from "react";
import {AppContext} from "../App";
import {LapList} from "./lap"
var timerInterval=-1;
let startTime;
let elapsedTime = 0;
let isRunning = false;

export const  formatTime=(milliseconds)=> {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const millisecondsDisplay = Math.floor((milliseconds % 1000) / 10)
        .toString()
        .padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${millisecondsDisplay}`;
    }

export const Watch = ()=>{
    const {laps,addLaps} = useContext(AppContext);
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
    // function formatTime(milliseconds) {
    // const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    // const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    // const millisecondsDisplay = Math.floor((milliseconds % 1000) / 10)
    //     .toString()
    //     .padStart(2, '0');
    // return `${hours}:${minutes}:${seconds}.${millisecondsDisplay}`;
    // }

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

    addLaps([]);
    }

    function addLapsHandeler(){
        addLaps([...laps,elapsedTime])
    }

    return (
        <Fragment>
            <div className="row">
                <div className="card z-depth-0 transparent col s12">
                    <div className="row">
                        <div className="clock-box col s12">
                            <div class="clock">
                                <span className="time">{time}</span>
                            </div>
                        </div>
                        <div className="hide-on-med-and-up col s10 l10  offset-s1 offset-l ">
                            <LapList className="" />
                        </div>
                    </div>

                    <div class={`card-actions ${actionFlag ? '' : 'hide'}`} >
                        <a className={`btn ${isRunning ? 'hide':''}`}  onClick={startStopwatch}><i className="large material-icons left">play_arrow</i> start</a>
                        <a className={`btn ${isRunning ? '':'hide'}`} onClick={addLapsHandeler}> <i className="large material-icons left">add</i> laps </a>
                        <a className={`btn ${isRunning ? '':'disabled'}`} onClick={stopStopwatch}> <i className="large material-icons left">pause</i>pause </a>
                        {/* <a className="btn"> <i className="large material-icons left">stop</i> stop </a> */}
                    </div>
                    <div class ={`card-actions ${actionFlag ? 'hide' : ''}`} >
                        <a className="btn" onClick={resetStopwatch}> <i className="large material-icons left">replay</i> reset </a>
                        <a className="btn"  onClick={startStopwatch}><i className="large material-icons left">play_arrow</i> resume</a>
                    </div>
                    <div className="row">
                        <div className="hide-on-small-only  ">
                                <LapList className="" />
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    )
}