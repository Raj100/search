'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../redux/slices/themeSlice';

const useInitializeTheme = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      dispatch(setTheme(savedTheme || 'light'));
    }
  }, [dispatch]);
};

export default useInitializeTheme;