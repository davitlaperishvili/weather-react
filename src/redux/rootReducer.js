import { combineReducers } from "redux";
import { widgetsReducer } from "./widgetsReducer";
export const rootReducer = combineReducers({
    widgets: widgetsReducer,
});
