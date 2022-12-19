import { WIDGETS_LIST } from "./types";

const initialWidgets = localStorage.getItem("widgets");
let initialState = initialWidgets ? [...JSON.parse(initialWidgets)] : [];
export const widgetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WIDGETS_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
};
