import React from "react";

export default function WidgetItem(props) {
    const { cityName, countryName } = props;
    return (
        <div className="widget_item">
            <div className="widget_location">
                <div className="location">
                    {cityName} / {countryName}
                </div>
                <div className="time">15:30 AM</div>
            </div>
            <div className="widget_top">
                <div className="weather_icon">
                    <img src="/weather-react/images/sunny.png" alt="" />
                </div>
                <div className="weather_info">
                    <div className="celsius">
                        32 <sup>º</sup>
                    </div>
                    <div className="desc">sunny cloudy</div>
                </div>
            </div>
            <div className="widget_bottom">
                <div className="weather_additional_info">
                    <ul>
                        <li>
                            <img src="/weather-react/images/wind.png" alt="" />
                            <span>16 km/h</span>
                        </li>
                        <li>
                            <img src="/weather-react/images/cloud.png" alt="" />
                            <span>83 %</span>
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
