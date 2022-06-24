import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initalState = {
  array: [
    { text: "купить ролс-ройс" },
    { text: "получить оффер на 100k" },
    { text: "ц1авахан д1авиж" },
  ],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "newArray":
      return {
        ...state,
        array: [action.payload, ...state.array],
      };

    case "delete":
      return {
        ...state,
        array: [
          ...state.array.filter((item, index) => {
            if (index !== action.payload.id) return true;
          }),
        ],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
