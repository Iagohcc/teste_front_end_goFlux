import { BrowserRouter, Route, Switch } from "react-router-dom";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Layout from "./components/Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Characters} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/locations" component={Locations} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
