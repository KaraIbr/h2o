import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [reports, setReports] = useState([]);

  // Simulación de datos para propósitos de demostración
  useEffect(() => {
    // Simulación de carga de datos del usuario
    const fetchUserData = async () => {
      // Lógica para obtener datos del usuario (simulación)
      const userData = {
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'Administrator',
      };
      setUserData(userData);
    };

    // Simulación de carga de reportes
    const fetchReports = async () => {
      // Lógica para obtener reportes (simulación)
      const reports = [
        { id: 1, date: '2024-07-15', category: 'Consumo de Agua', description: 'Reporte diario de consumo de agua' },
        { id: 2, date: '2024-07-14', category: 'Facturación', description: 'Reporte semanal de facturación' },
        // Otros reportes simulados
      ];
      setReports(reports);
    };

    fetchUserData();
    fetchReports();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      {/* Mostrar información del usuario */}
      {userData && (
        <div>
          <h2>User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
        </div>
      )}

      {/* Mostrar lista de reportes */}
      <h2>Reports</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <p>Date: {report.date}</p>
            <p>Category: {report.category}</p>
            <p>Description: {report.description}</p>
          </li>
        ))}
      </ul>

      {/* Botón para ir al dashboard del usuario */}
      <Link to="/user">
        <button>Go to User Dashboard</button>
      </Link>
    </div>
  );
};

export default AdminDashboard;
