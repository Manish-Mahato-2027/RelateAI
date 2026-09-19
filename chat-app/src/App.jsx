import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

// Layout & Pages
import Sidebar from './components/layout/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Messages from './pages/Messages/Messages';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Settings from './pages/Setting/Setting';
import Relationships from './pages/Relationships/Relationships';
import Analytics from './pages/Analytics/Analytics';

function AppLayout() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="relationships" element={<Relationships />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}