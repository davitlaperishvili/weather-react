import React from "react";
import WidgetContainer from "../weatherWidget/WidgetContainer";
import "./mainContainer.scss";
export default function MainContainer() {
    return (
        <div className="main_container">
            <WidgetContainer />
        </div>
    );
}
