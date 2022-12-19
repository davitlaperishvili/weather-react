import { WIDGETS_LIST } from "./types";

export function changeWidgetsList(widgetItemObject) {
    return {
        type: WIDGETS_LIST,
        payload: widgetItemObject,
    };
}
