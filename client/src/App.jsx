import React from 'react';
import './styles/App.css';
import AppRoutes from './routes/Routes';
import { AuthProvider } from './context/AuthContext'; // импортируем провайдер

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
