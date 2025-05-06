import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function EmailConfirm({ onVerified, email }) {
  const [code, setCode] = useState('');

  const verifyCode = async () => {
    try {
      const res = await fetch(`http://localhost:5000/auth/verify-email?code=${code}`);

      if (!res.ok) throw new Error();
      toast.success('Email расталды');
      onVerified(true); // Уведомляем родительский компонент о подтверждении email
    } catch (err) {
      toast.error('Қате код немесе код ескі');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        placeholder="Кодты енгізіңіз"
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={verifyCode}>Растау</button>
    </div>
  );
}