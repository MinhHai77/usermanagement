import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Hàm createStore dùng để khởi tạo 1 redux store
import { createStore } from "redux";
// Component Provider dùng để kết nối redux store với react component
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


