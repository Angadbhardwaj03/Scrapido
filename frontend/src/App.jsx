import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import KabadiwalaDashboard from './pages/KabadiwalaDashboard';
import ArtisanDashboard from './pages/ArtisanDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Marketplace from './pages/Marketplace';
import './App.css';
import Leaderboard from './pages/Leaderboard'; 
import SellScrap from './pages/SellScrap';
import ScrapRate from './pages/ScrapRate';
import Login from './pages/Login';
import SignupForm from './pages/sigup';
import WorkerDashboard from './pages/WorkerDashboard';
import MCDDashboard from './pages/MCDDashboard';
import CitizenDashboard from './components/CitizenDashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/dashboard/user/overview" element={<UserDashboard />} />
      <Route path="/kabadiwala" element={<KabadiwalaDashboard />} />
      <Route path="/artisan" element={<ArtisanDashboard />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/user" element={<SellScrap />} />
      <Route path="/ScrapRate" element={<ScrapRate />} />
      <Route path="/Login/:role" element={<Login />} />
      <Route path="/SignUpForm" element={< SignupForm />} />

      <Route path="/citizen" element={<CitizenDashboard />} />
      <Route path="/worker" element={<WorkerDashboard />} />
      <Route path="/mcd" element={<MCDDashboard />} />
      
      
    </Routes>
  );
}
export default App;