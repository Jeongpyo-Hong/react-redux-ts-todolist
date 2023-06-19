import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import "./global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./module/index";
import thunk from "redux-thunk";

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
