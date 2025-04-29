import React from 'react';
import './styles/App.css';
import AppRoutes from './routes/Routes';
import { AuthProvider } from './context/AuthContext'; // импортируем провайдер
import { Toaster } from 'react-hot-toast'; // ✅ добавляем Toaster

function App() {
  return (
    <AuthProvider>
      <>
        <Toaster position="top-center" reverseOrder={false} /> {/* ✅ Toaster подключен */}
        <AppRoutes />
      </>
    </AuthProvider>
  );
}

export default App;