import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { registerApplication, start } from "single-spa";
import Root from "./Root";

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

registerApplication({
  name: "react-app",
  app,
  activeWhen: ["/"],
});

start();
