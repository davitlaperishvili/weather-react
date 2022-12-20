import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWidgetsList } from "../../redux/actions";
import "./deleteWidget.scss";

export default function DeleteWidget({ id }) {
    const dispatch = useDispatch();
    let state = useSelector((state) => {
        return state;
    });
    function handleDeleteWidget() {
        const newList = state.widgets.filter((widget) => {
            return widget.location.name !== id;
        });
        localStorage.setItem("widgets", JSON.stringify(newList));
        dispatch(changeWidgetsList());
    }
    return (
        <div className="delete_widget" onClick={handleDeleteWidget}>
            <div className="outer">
                <div className="inner">
                    <label>Remove</label>
                </div>
            </div>
        </div>
    );
}
