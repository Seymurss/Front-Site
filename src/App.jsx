import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel';
import PrivateRoute from './authtenticate/PrivateRoute';
import { useEffect, useState } from 'react';

function App() {
  const [backendReady, setBackendReady] = useState(false);

  useEffect(() => {
    // Backend-i oyatmaq üçün "ping"
    const wakeBackend = async () => {
      try {
        const response = await fetch("https://back-site-2.onrender.com/api/projects");
        if (response.ok) {
          console.log("✅ Backend hazırdır");
          setBackendReady(true);
        } else {
          console.warn("⚠️ Backend cavab verir, amma OK deyil");
        }
      } catch (error) {
        console.error("❌ Backend cavab vermədi:", error.message);
      }
    };

    wakeBackend();
  }, []);

  return (
    <Router>
      {/* optional loading göstəricisi */}
      {!backendReady && (
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <p>🔄 Backend hazırlanır... Zəhmət olmasa bir az gözləyin.</p>
        </div>
      )}

      {/* Əsas marşrutlar backend hazır olandan sonra yüklənsin */}
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
