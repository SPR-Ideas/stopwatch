import React, { Fragment } from "react";

export const Watch = ()=>{
    return (
        <Fragment>
            <div className="row">
                <div className="card clock-box z-depth-1 col s12">
                    <div class="clock"></div>
                    {/* <div calss="card-actions" >
                        <a className="btn"> start </a>
                        <a className="btn"> pause </a>
                        <a className="btn"> stop </a>
                    </div> */}
                </div>
            </div>

        </Fragment>
    )
}