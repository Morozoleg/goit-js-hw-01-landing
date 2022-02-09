import React from "react";
import classes from "./Contacts.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import ContentPage from "../ContentPage/ContentPage";
import ContactForm from "../../Utilities/ContactForm/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "../../Utilities/Map/Map";

const parser = (data) => {
  data = data.content.main_page_content;
  return {
    title: data.entity.title[0].value,
    salesEmail: data.entity.field_service_departament[0].field_email[0].value,
    orderEmail: data.entity.field_service_departament[0].field_email[1].value,
    titleServiceDepartment: data.view_mode.field_service_departament.title,
    location: data.entity.field_service_departament[0].field_location[0].value,
    telServiceDepartment1:
      data.entity.field_service_departament[0].field_tel[0].value,
    telServiceDepartment2:
      data.entity.field_service_departament[0].field_tel[1].value,
    timeServiceDepartment:
      data.entity.field_service_departament[0].field_time[0].value,
    titleTechnicalSupport: data.view_mode.field_technical_support.title,
    supportEmail: data.entity.field_technical_support[0].field_email[0].value,
    telTechnicalSupport:
      data.entity.field_technical_support[0].field_tel[0].value,
    titleWorkTogether: data.view_mode.field_work_together.title,
  };
};

function Contacts(props) {
  const [text, error] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    name: "/contact",
    parser,
  });
  if (error) {
    return error.message;
  }
  return (
    <div className={classes.wrapper}>
      <ContentPage menuItem={"contact"} className={`slick-height`}>
        {text ? (
          <>
            <div className={classes.container}>
              <h1 className={classes.heading}>{text.title}</h1>
              <div className={classes.insideWrapper}>
                <div className={classes.infoWrapper}>
                  <div className={classes.serviceDepartmentWrapper}>
                    <h2 className={classes.paragraphHeading}>
                      {text.titleServiceDepartment}
                    </h2>
                    <ul className={classes.list}>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"map-marker-alt"} />
                        </i>
                        <p>{text.location}</p>
                      </li>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"clock"} />
                        </i>
                        <p>{text.timeServiceDepartment}</p>
                      </li>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"mobile-alt"} />
                        </i>
                        <p>{text.telServiceDepartment1}</p>
                      </li>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"mobile-alt"} />
                        </i>
                        <p>{text.telServiceDepartment2}</p>
                      </li>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"envelope"} />
                        </i>
                        <p>{text.salesEmail}</p>
                      </li>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"envelope"} />
                        </i>
                        <p>{text.orderEmail}</p>
                      </li>
                    </ul>
                  </div>
                  <div className={classes.technicalSupportWrapper}>
                    <h2 className={classes.paragraphHeading}>
                      {text.titleTechnicalSupport}
                    </h2>
                    <ul className={classes.list}>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"mobile-alt"} />
                        </i>
                        <p>{text.telTechnicalSupport}</p>
                      </li>
                      <li className={classes.group}>
                        <i>
                          <FontAwesomeIcon icon={"envelope"} />
                        </i>
                        <p>{text.supportEmail}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.formWrapper}>
                  <h2 className={classes.titleForm}>
                    {text.titleWorkTogether}
                  </h2>
                  <ContactForm
                    buttonClassname={"btn btn-dark"}
                    className={classes.form}
                  />
                </div>
              </div>
              <div className={classes.mapWrapper}>
                <Map />
              </div>
            </div>
            <div className={classes.mapWrapperMobile}>
              <Map />
            </div>
          </>
        ) : (
          <></>
        )}
      </ContentPage>
    </div>
  );
}

export default Contacts;
