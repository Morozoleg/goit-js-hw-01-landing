import React from "react";
import { useLanguageState } from "../../../Context/language";
import { useContentState } from "../../../Store/Content/store";
import { useForm } from "react-hook-form";
import {
  fetchContent,
  setContactFormSubmissionFlag,
} from "../../../Store/Content/actions";
import parser from "./parser";
import http from "../../../utilities/http";
import { Redirect } from "react-router-dom";
import classes from "./ContactForm.module.less";
import { formErrors, validation } from "./validation";
import Inputmask from "inputmask";
import Spinner from "../Spinner/Spinner";

const im = new Inputmask("+380999999999", {
  placeholder: " ",
  removeMaskOnSubmit: true,
  showMaskOnHover: false,
});

const changeHandler = ({ target: t }) => {
  t.dataset.empty = t.value ? "false" : "true";
};

function ContactForm({ className, buttonClassname, fallback = <Spinner /> }) {
  const name = "contactForm";
  const [lang] = useLanguageState();
  const [state, dispatch] = useContentState();
  const content = state[name]?.[lang];
  const [{ success, loading }, setStatus] = React.useState({
    success: false,
    loading: false,
  });
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    validateCriteriaMode: "all",
  });

  if (!content) {
    dispatch(
      fetchContent({ url: "/webform/call_back/get", lang, name, parser })
    );
  }

  const submitHandler = (data) => {
    data.webform_id = "call_back";
    setStatus({ success: false, loading: true });
    http
      .post("/webform_rest/submit", data)
      .then((res) => {
        if (!res.data.error) {
          dispatch(setContactFormSubmissionFlag(true));
          setStatus({ success: true, loading: false });
        }
      })
      .catch(console.log);
  };

  return success ? (
    <Redirect to={"/thank-you"} />
  ) : (
    <div className={`${classes.contactForm} ${className || ""}`}>
      {!content ? (
        fallback
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={classes.fields}>
            {content.form.fields.map(({ name, title, type }) => {
              return (
                <fieldset key={name} data-field={name}>
                  <label>
                    <input
                      maxLength={50}
                      className={errors[name] && classes.error}
                      data-label={title}
                      onChange={changeHandler}
                      type={type}
                      name={name}
                      placeholder={title}
                      ref={(e) => {
                        if (e && type === "tel") {
                          im.mask(e);
                        }
                        register(e, validation[name]);
                      }}
                    />

                    {/* <span>{title}</span> */}
                  </label>
                  {errors[name] && (
                    <span className={classes.error}>
                      {formErrors[name][lang]}
                    </span>
                  )}
                </fieldset>
              );
            })}
          </div>
          <button
            type="submit"
            className={`${buttonClassname || "btn btn-light"}`}
            disabled={loading}
          >
            {content.form.submit}
          </button>
        </form>
      )}
    </div>
  );
}
export default ContactForm;
