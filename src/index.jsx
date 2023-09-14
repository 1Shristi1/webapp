import React from "react";
import ReactDOMClient from "react-dom/client";
import { Interhome } from "./screens/Interhome";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Interhome />);
