'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '../../redux/slices/themeSlice';
import { RootState } from '../../redux/store';
import menuIcon from '../../assets/images/MenuUnion.png'
import Image from 'next/image';
import profileLogo from '../../assets/images/ProfileLogo.png'
import darkthemeIcon from '../../assets/icons/circle-half-stroke-solid.svg'
import lightthemeIcon from '../../assets/icons/moon-solid.svg'

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // useEffect(() => {
  //   dispatch(setTheme('light'));
  // }, []);
  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="absolute text-[#5F6368] dark:text-white right-0 flex p-6 bg-white dark:bg-darkbg">
      <div className='flex items-center space-x-4'>
      <div >Gmail</div>
      <div >Images</div>
      <Image className='h-5 w-5' src={menuIcon} alt="menuIcon" width={20} height={20}/>
      <Image
      src={theme==='dark'?darkthemeIcon:lightthemeIcon}
        onClick={handleToggleTheme}
        className="h-5 w-5"
        alt="toggletheme" width={20} height={20}
      />
      <Image className='h-10 w-10' src={profileLogo} alt="menuIcon" width={20} height={20}/>
      </div>
    </nav>
  );
};

export default Navbar;
