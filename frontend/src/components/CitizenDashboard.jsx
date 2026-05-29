// src/pages/CitizenDashboard.jsx
import React from 'react';
// Humara reusable sidebar
import { FaTruckMoving, FaVideo, FaInfoCircle, FaCheck } from 'react-icons/fa';
import { GiShoppingBag, GiTrashCan } from 'react-icons/gi';   // ✅ FIXED IMPORTS

import './CitizenDashboard.css';

const CitizenDashboard = () => {
    // Dummy data for demo
    const estimatedTime = "15 minutes";
    const collectionDay = "Dry Waste"; // Change this to "Wet Waste" to see the difference

    return (
        <div className="dashboard-layout">
            <main className="dashboard-main-content citizen-dashboard">
                <header className="dashboard-header">
                    <h1>Welcome, Citizen!</h1>
                    <p>Your contribution keeps the city clean. Here's your daily update.</p>
                </header>

                {/* --- Top Section: ETA and Tutorial --- */}
                <div className="top-info-grid">
                    <div className="info-card eta-card">
                        <div className="eta-icon"><FaTruckMoving /></div>
                        <div className="eta-text">
                            <p>The garbage collector will reach you in approx.</p>
                            <h3>{estimatedTime}</h3>
                        </div>
                    </div>
                    <div className="info-card tutorial-card">
                        <div className="tutorial-text">
                            <h3>New to waste segregation?</h3>
                            <p>Watch our quick 2-minute guide.</p>
                        </div>
                        <button className="tutorial-button"><FaVideo /> Watch Tutorial</button>
                    </div>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="main-citizen-grid">
                    {/* Left Side: Collection Info */}
                    <div className="dashboard-card-citizen collection-info">
                        <h3>Today's Collection: <strong>{collectionDay}</strong></h3>
                        <p className="collection-subtitle">Please keep the following bags ready for pickup.</p>
                        
                        <div className="waste-type-cards">
                            {/* Dry Waste Card */}
                            <div className={`waste-card ${collectionDay === 'Dry Waste' ? 'active dry' : 'inactive'}`}>
                                <div className="waste-icon"><GiShoppingBag /></div> {/* ✅ FIXED */}
                                <h4>Dry Waste</h4>
                                <p>Paper, Plastic, Metal, Glass</p>
                                <div className="bag-info">Use: Blue Bag</div>
                                {collectionDay === 'Dry Waste' && <div className="status-badge"><FaCheck /> Active Today</div>}
                            </div>
                            
                            {/* Wet Waste Card */}
                            <div className={`waste-card ${collectionDay === 'Wet Waste' ? 'active wet' : 'inactive'}`}>
                                <div className="waste-icon"><GiTrashCan /></div> {/* ✅ FIXED */}
                                <h4>Wet Waste</h4>
                                <p>Food scraps, Peels, Leftovers</p>
                                <div className="bag-info">Use: Green Bag</div>
                                {collectionDay === 'Wet Waste' && <div className="status-badge"><FaCheck /> Active Today</div>}
                            </div>

                            {/* Hazardous Waste Card - Always Active */}
                            <div className="waste-card active hazardous">
                                <div className="waste-icon"><FaInfoCircle /></div>
                                <h4>Hazardous Waste</h4>
                                <p>Batteries, E-waste, Medical</p>
                                <div className="bag-info">Use: Red Bag</div>
                                <div className="status-badge"><FaCheck /> Always Active</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Live Map */}
                    <div className="dashboard-card-citizen live-map">
                        <h3>Collector's Live Location</h3>
                        <div className="map-placeholder-citizen">
                            <div className="truck-icon">🚛</div>
                            <div className="your-location-pin">📍 You</div>
                            <p>Map showing the live route of the garbage truck in your area.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CitizenDashboard;
