import React from "react";
import classes from "./Footer.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerContent}>
          <div className={classes.links}>
            <a className="footer_phone" href="tel:+38(044)3621209 ">
              <FontAwesomeIcon icon="phone-alt" />
              <span>+38 (044) 362 12 09 </span>
            </a>
            <a href="mailto:order@planeta-web.com.ua" className="footer_mail">
              <FontAwesomeIcon icon="envelope" />
              <span>order@planeta-web.com.ua</span>
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
              <span>planetawebcomua</span>
            </a>
          </div>
          <div className="copyright">&copy; 2010-{date}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
