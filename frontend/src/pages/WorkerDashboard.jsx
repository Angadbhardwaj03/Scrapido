import React from 'react';
import { FaTruck, FaListUl, FaCheckCircle, FaExclamationTriangle, FaMapMarkedAlt } from 'react-icons/fa';
import './WorkerDashboard.css';

const WorkerDashboard = () => {
    // Dummy data for demo
    const assignedHouseholds = 85;
    const completedPickups = 32;
    const hazardousAlerts = 3;

    return (
        <div className="dashboard-layout">
            
            <main className="dashboard-main-content worker-dashboard">
                <header className="dashboard-header">
                    <h1>Worker Route Panel</h1>
                    <p>Good morning! Here is your route and tasks for today, **September 22, 2025**.</p>
                </header>

                {/* --- Quick Stats --- */}
                <div className="stats-grid-worker">
                    <div className="stat-card-worker">
                        <div className="stat-icon-worker households"><FaListUl /></div>
                        <div className="stat-info-worker"><h3>Assigned Households</h3><p>{assignedHouseholds}</p></div>
                    </div>
                    <div className="stat-card-worker">
                        <div className="stat-icon-worker completed"><FaCheckCircle /></div>
                        <div className="stat-info-worker"><h3>Completed Pickups</h3><p>{completedPickups}</p></div>
                    </div>
                    <div className="stat-card-worker">
                        <div className="stat-icon-worker pending"><FaTruck /></div>
                        <div className="stat-info-worker"><h3>Pending Pickups</h3><p>{assignedHouseholds - completedPickups}</p></div>
                    </div>
                    <div className="stat-card-worker">
                        <div className="stat-icon-worker hazardous"><FaExclamationTriangle /></div>
                        <div className="stat-info-worker"><h3>Hazardous Alerts</h3><p>{hazardousAlerts}</p></div>
                    </div>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="main-worker-grid">
                    {/* Left Side: Today's Route */}
                    <div className="dashboard-card-worker route-list">
                        <h3>Today's Route - Sector 15A</h3>
                        <ul>
                            <li className="route-item completed">
                                <span>House #102, Block A</span>
                                <button disabled><FaCheckCircle /> Collected</button>
                            </li>
                            <li className="route-item pending">
                                <span>House #105, Block A</span>
                                <button>Collect Waste</button>
                            </li>
                            <li className="route-item pending hazardous-item">
                                <span>House #110, Block B <FaExclamationTriangle title="Hazardous Waste Reported"/></span>
                                <button>Collect Waste</button>
                            </li>
                             <li className="route-item completed">
                                <span>House #201, Block C</span>
                                <button disabled><FaCheckCircle /> Collected</button>
                            </li>
                            <li className="route-item pending">
                                <span>House #203, Block C</span>
                                <button>Collect Waste</button>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side: Map */}
                    <div className="dashboard-card-worker route-map">
                        <h3><FaMapMarkedAlt /> Live Route Map</h3>
                        <div className="map-placeholder-worker">
                             <div className="worker-truck-icon">🚛 You</div>
                            <p>Map showing your assigned route and households for today.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkerDashboard;