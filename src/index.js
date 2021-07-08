import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
import {run} from "./app/app";
import "./main.css"; //Whenever webpack will come across this import stmt with .css file, it will check webpack config to see if we have a loader for such a file and if yes, it will use that to bundle this file 

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);