import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel';
import PrivateRoute from './authtenticate/PrivateRoute';
import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner'; // 💡 Spinner əlavə edildi

function App() {
  const [backendReady, setBackendReady] = useState(false);

  useEffect(() => {
    const wakeBackend = async () => {
      try {
        const res = await fetch("https://back-site-2.onrender.com/api/projects");
        if (res.ok) {
          setBackendReady(true);
        } else {
          console.warn("Backend OK deyil");
        }
      } catch (err) {
        console.error("Backend ping error:", err.message);
      }
    };
    wakeBackend();
  }, []);

  return (
    <Router>
      {!backendReady && (

        <>
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Spinner />
        </div>
          <div style={{ 
            height: "100vh", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "20px"
          }}>
            <p style={{ color: "#69717d", fontSize: "16px" }}>
              <Spinner />  Please wait ~30 or 120 seconds while the backend wakes up...
            </p>
          </div>
          </>
      )}

      {backendReady && (
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
