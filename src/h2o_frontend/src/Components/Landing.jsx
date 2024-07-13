import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate('/admin');
  };

  const goToUserApp = () => {
    navigate('/user');
  };

  return (
    <div className="container">
      <div>
      <h1 className="heading">H20 MONITORING</h1>

      <h2 style={{ color: '#2a5ea3' }}>Pagos Justos</h2>
      <div className="buttons-container">
        <button onClick={goToAdminDashboard} className="button">Conectar Internet I</button>
        <button onClick={goToUserApp} className="button">App del Usuario</button>
      </div>
      </div>
      <div className="animation">
      <iframe 
        src="https://my.spline.design/waterdaodesktop-70ea8006d72b323cefe5b337ca4d2c5c/" 
        frameBorder="0" 
        width="100%" 
        height="600px"
        style={{ border: 'none' }}
        title="Spline Design"
      ></iframe>
      </div>
      
    </div>
    
  );
};

export default Landing;
