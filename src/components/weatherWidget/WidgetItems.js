import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import requestInfo from "../../server/RequestInfo";
import WidgetItem from "./WidgetItem";
export default function WidgetItems() {
    let state = useSelector((state) => {
        return state;
    });
    function renderWidgets() {
        return state.widgets.map((city, index) => {
            if (!city.error) {
                return <WidgetItem key={`${index}${city.location.name}`} widgetLocation={city.location} widgetCurrent={city.current} />;
            }
        });
    }
    return <div className="widget_items">{renderWidgets()}</div>;
}
