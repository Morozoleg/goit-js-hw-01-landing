import React, { useState } from 'react'
import classes from './OrderButtonForm.module.less'
import ContactForm from '../ContactForm/ContactForm'
import {useLanguageState} from "../../../Context/language";

const butonform = {
    en: ["order a project"],
    ru: ["заказать проект"],
    uk: ["замовити проект"]
};

function OrderButtonForm() {
    const [animation, setAnimation] = useState(false);
    const [lang] = useLanguageState();
    const butonformtext = butonform[lang][0];
    return (
        <div
            className={`${classes.formWrapper} ${
                animation ? classes.animationWrapper : ""
                }`}
        >
            <button
                className={`${classes.btn} btn btn-dark`}
                onClick={() => setAnimation(true)}
            >
                {butonformtext}
              </button>
            <div className={classes.containerForm}>
                <ContactForm
                    className={`${classes.form}`}
                    buttonClassname={"btn btn-dark"}
                />
            </div>
        </div>
    )
}

export default OrderButtonForm
