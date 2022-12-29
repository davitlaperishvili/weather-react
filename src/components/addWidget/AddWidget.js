import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWidgetsList } from "../../redux/actions";
import requestInfo from "../../server/RequestInfo";
import "./addWidget.scss";

export default function AddWidget(props) {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [formValue, setFormValue] = useState({
        cityName: "",
    });
    const [formError, setFormError] = useState(false);
    const placeholder = error ? "Please enter correct city name" : "Please enter city name";
    const isFormValueEmpty = (obj) => {
        for (const property in obj) {
            if (obj[property] === "") {
                return true;
            }
        }
        return false;
    };
    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            if (!isFormValueEmpty(formValue)) {
                setFormValue({
                    cityName: "",
                });
                const widget = await requestInfo(formValue.cityName);
                if (!widget.error) {
                    let existingWidgets = localStorage.getItem("widgets") ? JSON.parse(localStorage.getItem("widgets")) : [];
                    localStorage.setItem("widgets", JSON.stringify([...existingWidgets, widget]));
                    dispatch(changeWidgetsList());
                    setError("");
                } else {
                    setError("error");
                }
            } else {
                setFormError(true);
            }
        } catch (e) {
            console.log("Error in onFormSubmit function ===>>>", e);
        }
    }
    function setErrorHtml() {
        if (formError) {
            return <div className="Error"> Fill All Fields </div>;
        }
    }
    function handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const inputItem = { ...formValue, [name]: value };
        setFormValue(inputItem);
    }

    return (
        <div className="add_widget">
            {setErrorHtml()}
            <div className="form_wrap">
                <form action="" onSubmit={onFormSubmit}>
                    <div className="form_items">
                        <div className="form_item">
                            <input type="text" className={error} name="cityName" value={formValue.cityName} onChange={handleInputChange} placeholder={placeholder} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
