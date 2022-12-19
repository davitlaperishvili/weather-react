import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWidgetsList } from "../../redux/actions";
import requestInfo from "../../server/RequestInfo";

export default function AddWidget(props) {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        cityName: "",
    });
    const [formError, setFormError] = useState(false);
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
        if (!isFormValueEmpty(formValue)) {
            setFormValue({
                cityName: "",
            });
            const widget = await requestInfo(formValue.cityName);
            dispatch(changeWidgetsList(widget));
            console.log(props.widgets.widgets);
            localStorage.setItem("widgets", JSON.stringify([...props.widgets.widgets]));
        } else {
            setFormError(true);
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
                            <input type="text" name="cityName" value={formValue.cityName} onChange={handleInputChange} placeholder="Please enter city name" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
