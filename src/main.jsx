import "./index.css";
import mitt from "mitt";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { createContext } from "react";

const emitter = mitt();
export const EventContext = createContext(emitter);

const root = createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<RecoilRoot>
			<EventContext.Provider value={emitter}>
				<App />
			</EventContext.Provider>
		</RecoilRoot>
	</BrowserRouter>
);
