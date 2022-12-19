import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import requestInfo from "../../server/RequestInfo";
import WidgetItem from "./WidgetItem";
export default function WidgetItems() {
    // async function getWidget(city, index) {
    //     const widget = await requestInfo(city);
    //     setWidgets([...widgets, widget]);
    //     const { name, country } = widget.location;
    //     return <WidgetItem key={`${index}${name}`} cityName={name} countryName={country} />;
    // }
    let state = useSelector((state) => {
        return state;
    });
    function renderWidgets() {
        return state.widgets.map((city, index) => {
            return <WidgetItem key={`${index}${city.location.name}`} widgetLocation={city.location} widgetCurrent={city.current} />;
        });
    }
    return <div className="widget_items">{renderWidgets()}</div>;
}
