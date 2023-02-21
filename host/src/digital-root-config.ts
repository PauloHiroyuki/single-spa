import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
//import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes({
  routes: [
    { "type": "route", "path": "react", "routes": [
      { "type": "application", "name": "@digital/modulo-react" }
    ]},
    
    { "type": "route", "path": "angular", "routes": [
      { "type": "application", "name": "@digital/modulo-angular" }
    ]}
  ]
});
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

layoutEngine.activate();
start();
