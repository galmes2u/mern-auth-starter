import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./utils/UserContext";
import { Header, Wrapper } from "./components"
import { HomePage, LoginPage, SignupPage } from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <div className="pt-3 px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </Wrapper>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
