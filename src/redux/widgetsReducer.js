import { WIDGETS_LIST } from "./types";

const initialWidgets = localStorage.getItem("widgets");
const initialState = initialWidgets ? [...JSON.parse(localStorage.getItem("widgets"))] : [];
export const widgetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WIDGETS_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
};
