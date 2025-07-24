import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel';
import PrivateRoute from './authtenticate/PrivateRoute';


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <AdminPanel />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
