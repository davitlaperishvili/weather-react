import React, { useState, useEffect } from "react";
import requestInfo from "../../server/RequestInfo";
import WidgetItem from "./WidgetItem";
export default function WidgetItems() {
    let [cities, setCities] = useState(["Tbilisi", "Moscow", "Erevan", "Baku"]);
    let [widgets, setWidgets] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const widget = await requestInfo("Tbilisi");
            setWidgets([widget]);
        }
        fetchData();
    }, []);
    // async function getWidget(city, index) {
    //     const widget = await requestInfo(city);
    //     setWidgets([...widgets, widget]);
    //     const { name, country } = widget.location;
    //     return <WidgetItem key={`${index}${name}`} cityName={name} countryName={country} />;
    // }
    function renderWidgets() {
        return widgets.map((city, index) => {
            const { name, country } = city.location;
            return <WidgetItem key={`${index}${name}`} cityName={name} countryName={country} />;
        });
    }
    return <div className="widget_items">{renderWidgets()}</div>;
}
