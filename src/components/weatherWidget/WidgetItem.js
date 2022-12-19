import React from "react";

export default function WidgetItem({ widgetLocation, widgetCurrent }) {
    const { name, country } = widgetLocation;
    const { temp_c, condition, wind_mph, cloud } = widgetCurrent;
    return (
        <div className="widget_item">
            <div className="widget_location">
                <div className="location">
                    {name} / {country}
                </div>
                {/* <div className="time">15:30 AM</div> */}
            </div>
            <div className="widget_top">
                <div className="weather_icon">
                    <img src="/weather-react/images/sunny.png" alt="" />
                </div>
                <div className="weather_info">
                    <div className="celsius">
                        {temp_c} <sup>º</sup>
                    </div>
                    <div className="desc">{condition.text}</div>
                </div>
            </div>
            <div className="widget_bottom">
                <div className="weather_additional_info">
                    <ul>
                        <li>
                            <img src="/weather-react/images/wind.png" alt="" />
                            <span>{wind_mph} mp/h</span>
                        </li>
                        <li>
                            <img src="/weather-react/images/cloud.png" alt="" />
                            <span>{cloud} %</span>
                        </li>
                        <li>
                            <img src="/weather-react/images/sun.png" alt="" />
                            <span>2 of 10</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
