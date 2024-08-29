'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleLogo from "../assets/images/GoogleLogo.png";
import Navbar from '@/components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuggestions, setSuggestions } from '../redux/slices/autocompleteSlice';
import { RootState, AppDispatch } from '../redux/store';
import { Suggestions } from '../../types';


const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [id, setId] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const suggestions = useSelector((state: RootState) => state.autocomplete.suggestions);
  const loading = useSelector((state: RootState) => state.autocomplete.loading);
  const router = useRouter();

  useEffect(() => {
    if (inputValue) {
      dispatch(fetchSuggestions(inputValue));
    } else {
      dispatch(setSuggestions([]));
    }
  }, [inputValue, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion: Suggestions) => {
    setInputValue(suggestion.name);
    setId(suggestion.id);
    dispatch(setSuggestions([]));
    router.push(`/search?q=${encodeURIComponent(suggestion.name)}&id=${encodeURIComponent(suggestion.id)}`);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      
      router.push(`/search?q=${encodeURIComponent(inputValue.trim())}&id=${encodeURIComponent(id)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="font-roboto flex flex-col min-h-screen bg-white text-black dark:bg-darkbg dark:text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center grow">
        <Image 
          src={googleLogo} 
          alt="Google" 
          width={272} 
          height={92} 
          priority 
          className="mb-8"
        />
        <div className="relative w-full max-w-lg px-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search Google or type a URL"
            className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white border-gray-300 text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          {loading && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
              <p className="px-4 py-2 text-gray-500 dark:text-gray-400">Loading...</p>
            </div>
          )}
          {suggestions.length > 0 && !loading && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
