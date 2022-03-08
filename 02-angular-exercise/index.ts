import { singleSpaAngular } from "single-spa-angular";
import { registerApplication, start } from "single-spa";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgZone } from "@angular/core";
import { AppModule } from "./src/app.module";

const app = singleSpaAngular({
  bootstrapFunction() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: "<app-root>",
  NgZone,
});

registerApplication({
  name: "angular-app",
  app,
  activeWhen: ["/"],
});

start();
