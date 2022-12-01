import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import store from "./Redux/app/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
