import { React } from "react";
import LoginPage from "./components/Acceuil/login";
import SignupPage from "./components/Acceuil/signup";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TopPage from "./components/Head/Header";
import ClientInformation from "./components/Structure/ClientInformation"
import  WithdrawalForm  from "./components/Structure/Acceuil";
import BalanceViewer from "./components/Structure/BalanceViwer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/TopPage" element={<TopPage />} />
        <Route path="/ClientInformation" element={<ClientInformation />} />
        <Route path="/WithdrawalForm" element={<WithdrawalForm />} />
        <Route path="/BalanceViewer" element={<BalanceViewer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
