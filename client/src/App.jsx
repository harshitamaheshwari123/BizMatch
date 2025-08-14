import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import OnboardingBuyer from "./pages/OnboardingBuyer";
import OnboardingSeller from "./pages/OnboardingSeller";
import Profile from "./pages/Profile";
import Acquisition from "./pages/Acquisition";
import ProfileDashboard from "./pages/ProfileDashboard";
import FAQ from "./pages/FAQ";
import SettingsPage from "./pages/Setting";
import LegalServices from "./pages/LegalServices";
import SupportPage from "./pages/Support";
import AcquisitionWorkflow from "./pages/AcquisitionWorkflow";



export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.sidebar = isSidebarOpen ? "open" : "closed";

    const onDocumentClick = (e) => {
      if (!isSidebarOpen) return;
      const target = e.target;
      if (
        target.closest &&
        (target.closest(".sidebar") ||
          target.closest(".navbar-toggle") ||
          target.closest(".sidebar-resizer"))
      ) {
        return;
      }
      setIsSidebarOpen(false);
      root.dataset.sidebar = "closed";
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const next = !prev;
      const root = document.documentElement;
      root.dataset.sidebar = next ? "open" : "closed";
      return next;
    });
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding-buyer" element={<OnboardingBuyer />} />
          <Route path="/onboarding-seller" element={<OnboardingSeller />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:role/:id" element={<ProfileDashboard />} />
          <Route path="/acquisition" element={<Acquisition />} />
          <Route path="/acquisition-workflow" element={<AcquisitionWorkflow />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/legal" element={<LegalServices />} />
          <Route path="/support" element={<SupportPage />}/>
        </Routes>
      </div>
    </>
  );
}
