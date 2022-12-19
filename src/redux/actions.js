import { WIDGETS_LIST } from "./types";

export function changeWidgetsList() {
    const widgetObjects = localStorage.getItem("widgets") ? JSON.parse(localStorage.getItem("widgets")) : [];
    return {
        type: WIDGETS_LIST,
        payload: widgetObjects,
    };
}
