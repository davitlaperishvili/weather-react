import React from "react";
import WidgetItems from "./WidgetItems";
import "./weatherWidget.scss";
export default function WidgetContainer() {
    return (
        <div className="widget_container">
            <WidgetItems />
        </div>
    );
}
