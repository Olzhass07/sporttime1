import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    // Получаем ник из localStorage
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Профиль</h1>
      <p><strong>Имя пользователя:</strong> {nickname || 'Не указан'}</p>
    </div>
  );
};

export default Profile;