import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "..app/src/App.jsx";
import solicitarturno from "../resources/solicitar-turno";

export const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/solicitar-turno" component={solicitarturno} />
      <Route path="/Tabla-de-turnos" component={tabla - turnos} />
    </Switch>
  </Router>
);
