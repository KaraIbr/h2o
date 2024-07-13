import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/Components/Landing';
import AdminDashboard from '../src/Components/AdminDashboard';
import UserApp from '../src/Components/UserApp';
import '../main.css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta para la landing page */}
          <Route path="/" element={<Landing />} />

          {/* Ruta para el dashboard del administrador */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Ruta para el dashboard del usuario */}
          <Route path="/user" element={<UserApp />} />

          {/* Ruta por defecto para manejar rutas no encontradas */}
          <Route
            path="*"
            element={
              <div>
                <h1>Error 404</h1>
                <p>Page not found!</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
