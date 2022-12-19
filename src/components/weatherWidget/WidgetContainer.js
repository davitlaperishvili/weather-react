import React, { useEffect, useState } from "react";
import WidgetItems from "./WidgetItems";
import "./weatherWidget.scss";
import AddWidget from "../addWidget/AddWidget";
import requestInfo from "../../server/RequestInfo";
import { useDispatch, useSelector } from "react-redux";
import { changeWidgetsList } from "../../redux/actions";

export default function WidgetContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            // You can await here
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (result) => {
                    const widget = await requestInfo(`${result.coords.latitude},${result.coords.longitude}`);
                    if (!localStorage.getItem("widgets")) localStorage.setItem("widgets", JSON.stringify([widget]));
                    // dispatch(changeWidgetsList(widget));
                });
            }
        }
        fetchData();
    }, [dispatch]);
    let state = useSelector((state) => {
        return state;
    });
    return (
        <div className="widget_container">
            <AddWidget widgets={state} />
            <WidgetItems />
        </div>
    );
}
