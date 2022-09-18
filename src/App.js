import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import Fibonacci from "./components/Fibonacci";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route
          path="/"
          element={
            localStorage.getItem("userLoggedIn") ? (
              <Fibonacci />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
