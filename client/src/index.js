import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#222D44",
            colorPrimaryHover: "#3C4F76",
            borderRadius: "3px",
          },
        },
        token: {
          borderRadius: "2px",
          colorPrimary: "#3C4F76",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
