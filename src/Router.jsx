import { Routes, Route } from "react-router-dom";

import Home from "./Componet/pages/Home/Home";
import Dashboard from "./Componet/Dashboard/pages/Dashboard";
import Chat from "./Componet/Chat/pages/Chat";
import Settings from "./Componet/Settings/pages/Settings";

import SignIn from "./Componet/SignIn/pages/SignIn";
import SignUp from "./Componet/SignUp/pages/SignUp";

import Client from "./Componet/Client/pages/Client";
import Pro from "./Componet/Pro/Pages/Pro";
import Admin from "./Componet/Admin/pages/Admin";

import Marketplace from './Marketplace/Marketplace'
import ClientDashboard from './Componet/Client/pages/Dashboard/ClientDashboard'
import ClientChat from './Componet/Client/pages/Chat/ClientChat'
import ClientSettings from './Componet/Client/pages/Settings/ClientSettings'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="/client" element={<Client />} />
      <Route path="/pro" element={<Pro />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/client/dashboard" element={<ClientDashboard />} />
      <Route path="/clientchat" element={<ClientChat />} />
      <Route path="/clientsettings" element={<ClientSettings />} />
      

    </Routes>

  );
};


export default Router;