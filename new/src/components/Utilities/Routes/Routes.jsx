import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";
import useCheckSSR from "../../../utilities/useCheckSSR";
const Main = React.lazy(() => import("../../Pages/Main/Main"));
const ThankYou = React.lazy(() => import("../../Pages/ThankYou/ThankYou"));
const Portfolio = React.lazy(() => import("../../Pages/Portfolio/Portfolio"));
const OschadPortfolio = React.lazy(() =>
    import("../../Pages/Portfolio/PortfolioCases/OschadPortfolio/OschadPortfolio")
);
const MonobankPortfolio = React.lazy(() =>
    import("../../Pages/Portfolio/PortfolioCases/MonobankPortfolio/MonobankPortfolio")
);
const UkrgidroenergoPortfolio= React.lazy(() =>
    import("../../Pages/Portfolio/PortfolioCases/UkrgidroenergoPortfolio/UkrgidroenergoPortfolio")
);
const CamozziPortfolio = React.lazy(() =>
    import("../../Pages/Portfolio/PortfolioCases/CamozziPortfolio/CamozziPortfolio")
);
const Design911TradePortfolio = React.lazy(() =>
    import("../../Pages/Portfolio/PortfolioCases/Design911TradePortfolio/Design911TradePortfolio")
);
const About = React.lazy(() => import("../../Pages/About/About"));
const Contacts = React.lazy(() => import("../../Pages/Contacts/Contacts"));
const Services = React.lazy(() => import("../../Pages/Services/Services"));
const Technology = React.lazy(() =>
    import("../../Pages/Technology/Technology")
);
const TechnologyDetails = React.lazy(() =>
    import("../../Pages/Technology/TechnologyDetails")
);

export default function Routes() {
  const isSSR = useCheckSSR();
  if (!isSSR) return null;
  return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/thank-you">
            <ThankYou />
          </Route>
          <Route path="/contact" component={Contacts} />
          <Route path={"/about-us"} component={About} />
          <Route
              path={"/portfolio/apple-pay-oschadbank"}
              component={OschadPortfolio}
          />
          <Route
              path={"/portfolio/my-monobank-card"}
              component={MonobankPortfolio}
          />
          <Route
              path={"/portfolio/ukrgidroenergo"}
              component={UkrgidroenergoPortfolio}
          />
          <Route
              path={"/portfolio/camozzi"}
              component={CamozziPortfolio}
          />
          <Route
              path={"/portfolio/design911trade"}
              component={Design911TradePortfolio}
          />
          <Route exact path={"/technology"} component={Technology} />
          <Route exact path="/technology/:id" component={TechnologyDetails} />
          <Route path={"/uslugi"} component={Services} />
          <Route exact path={"/portfolio"} component={Portfolio} />
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
  );
}
