import React from 'react';
// import { FaUsers, FaWeight, FaMapPin, FaExclamationCircle } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './MCDDashboard.css';

const zonalData = [
    { name: 'Zone A', value: 400 }, { name: 'Zone B', value: 300 },
    { name: 'Zone C', value: 300 }, { name: 'Zone D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MCDDashboard = () => {
    return (
        <div className="dashboard-layout">
            
            <main className="dashboard-main-content mcd-dashboard">
                <header className="dashboard-header">
                    <h1>MCD Operations Overview</h1>
                    <p>Live status of waste collection activities across the city.</p>
                </header>

                <div className="stats-grid-mcd">
                     {/* Stat Cards for MCD */}
                </div>

                <div className="main-mcd-grid">
                    {/* Left Side: Worker List */}
                    <div className="dashboard-card-mcd worker-status-list">
                        <h3>Live Worker Status</h3>
                        <table>
                            <thead>
                                <tr><th>Worker ID</th><th>Vehicle</th><th>Area</th><th>Status</th></tr>
                            </thead>
                            <tbody>
                                <tr className="status-on-route"><td>W-101</td><td>DL-5C-1234</td><td>Sector 15A</td><td>On Route</td></tr>
                                <tr className="status-on-route"><td>W-102</td><td>DL-5C-5678</td><td>Sector 22</td><td>On Route</td></tr>
                                <tr className="status-on-break"><td>W-103</td><td>DL-5C-9012</td><td>DLF Phase 3</td><td>On Break</td></tr>
                                <tr className="status-completed"><td>W-104</td><td>DL-5C-3456</td><td>Sector 56</td><td>Route Completed</td></tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Right Side: Map & Chart */}
                    <div className="right-column-mcd">
                        <div className="dashboard-card-mcd">
                            <h3>Live Operations Map</h3>
                            <div className="map-placeholder-mcd"></div>
                        </div>
                        <div className="dashboard-card-mcd">
                            <h3>Zonal Collection Report (Today)</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie data={zonalData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                        {zonalData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                    </Pie>
                                    <Tooltip formatter={(value) => `${value} kg`} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default MCDDashboard;