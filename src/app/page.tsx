'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import googleLogo from "../assets/images/GoogleLogo.png";
import Navbar from '@/components/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../components/Footer/Footer"

const Home = () => {

  return (
    <div className="font-roboto flex flex-col min-h-screen bg-white text-black dark:bg-darkbg dark:text-white">
      <Navbar></Navbar>
      <main className="flex flex-col  items-center justify-center grow">
        <Image 
          src={googleLogo} 
          alt="Google" 
          width={272} 
          height={92} 
          priority 
          className="mb-8"
        />
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white border-gray-300 text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <div>
          
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;