import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../stateManagement/store.js";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import { auth, db } from "./firebaseConfig.js";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={auth.currentUser ? <App /> : <Login />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/feed" element={<App />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
