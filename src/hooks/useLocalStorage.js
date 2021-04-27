import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [storedFavorites, setStoredFavorites] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedFavorites));
  }, [key, storedFavorites]);

  return [storedFavorites, setStoredFavorites];
};


export default useLocalStorage;
