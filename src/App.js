import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recovery from "./components/Recovery";
import ResetPassword from "./components/ResetPassword";
import RegistrationType from "./components/RegistrationType";
import RegistrationCusDetails from "./components/RegistrationCusDetails";
import RegiCustomerEmail from "./components/RegiCustomerEmail";
import RegistrationPage from "./components/RegistrationPage";
import AccountSetting from "./components/AccountSetting";
import SecuritySetting from "./components/SecuritySetting";
import DisplayProfile from "./components/DisplayProfile";
import LoginPassword from "./components/LoginPassword";
import LoginUsername from "./components/LoginUsername";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUsername />} />
          <Route
            path="/login password"
            element={
              <ProtectRoute>
                <LoginPassword />
              </ProtectRoute>
            }
          />

          <Route path="/forgotten password" element={<Recovery />} />
          <Route path="/reset password" element={<ResetPassword />} />
          <Route path="/registration type" element={<RegistrationType />} />
          <Route
            path="/customer registration"
            element={<RegistrationCusDetails />}
          />
          <Route path="/registation email" element={<RegiCustomerEmail />} />
          <Route path="/register owner" element={<RegistrationPage />} />
          <Route path="/account setting" element={<AccountSetting />} />
          <Route path="/security setting" element={<SecuritySetting />} />
          <Route
            path="/display profile"
            element={
              <>
                {" "}
                <DisplayProfile /> <AuthorizeUser />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
