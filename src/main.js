import {startUsage} from "./core/usage.js";
import "./styles.css";
import { createApp } from "./core/app.js";

createApp(document.querySelector("#app"));

void startUsage();
