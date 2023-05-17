import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./layouts/Onboarding";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />}>
          <Route index element={<Signup />}></Route>
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="success" element={<Success />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
