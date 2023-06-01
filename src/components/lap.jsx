import React ,{Fragment, useContext} from "react";
import { AppContext } from "../App";
import {formatTime} from "./watch"

export const LapList=()=> {
    const {laps} = useContext(AppContext)
    return (
    <Fragment>
      <ul class="collection with-header z-depth-0  ">
        <li class="collection-header N/A transparent white-text"><h4>Laps</h4></li>

        {laps.map((value, index) => (
            <li className="collection-item N/A transparent white-text">
                <div className="flex-box"><p>{index + 1}</p><p>{formatTime(value)}</p> <p className="last">{(index!=0)?formatTime(value - laps[index-1] ): formatTime(value)}</p> </div>
            </li>

        ))}
      </ul>
    </Fragment>
    )
}