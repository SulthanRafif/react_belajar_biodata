import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biodata from "../page/Biodata";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/">
            <Biodata />
        </Route> 
        </Switch>
      </div>
    </Router>
  );
}
