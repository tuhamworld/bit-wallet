import React, { useState } from "react";
import OvalButton from "../../atoms/OvalButton";

const TimeSeries = () => {
    const [activeTime, setActiveTime] = useState('week');
    return (
        <div className="calendar">
            <OvalButton
                type="day"
                text="Day"
            />
            <OvalButton
                type="week"
                text="Week"
            />
            <OvalButton
                type="month"
                text="Month"
            />
            <OvalButton
                type="year"
                text="Year"
            />
            
        </div>
    )
}

export default TimeSeries;