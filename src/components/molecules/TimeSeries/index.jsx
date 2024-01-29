import React, { useState } from "react";
import OvalButton from "../../atoms/OvalButton";
import "./index.scss";

const TimeSeries = () => {
    return (
        <div className="calendar main-container">
            <OvalButton
                url="day"
                type='day'
                text="Day"
            />
            <OvalButton
                url="week"
                type={`week active`}
                text="Week"
            />
            <OvalButton
                url="month"
                type="month"
                text="Month"
            />
            <OvalButton
                url="year"
                type="year"
                text="Year"
            />
            
        </div>
    )
}

export default TimeSeries;