"use client"; 

import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults ,setQuery} from '@/redux/slices/searchSlice';
import { RootState, AppDispatch } from '@/redux/store';
import googleLogo from '../../assets/images/GoogleLogo.png';
import profileIcon from '../../assets/images/ProfileLogo.png';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fetchSuggestions, setSuggestions } from '../../redux/slices/autocompleteSlice';
import { Suggestions } from '../../../types';
import SearchParamsClient from '@/components/SearchParamsClient/SearchParamsClient';

const SearchPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { results, loading, error } = useSelector((state: RootState) => state.search);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const suggestions = useSelector((state: RootState) => state.autocomplete.suggestions);
  const router = useRouter();
  const query=useSelector((state: RootState) => state.search.searchQuery);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

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

  const handleSearch = () => {
    if (inputValue.trim()) {
      dispatch(setQuery(inputValue));
      router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: Suggestions) => {
    setInputValue(suggestion?.name);
    dispatch(setSuggestions([]));
    dispatch(fetchSearchResults(suggestion?.id));

    router.push(`/search?q=${encodeURIComponent(suggestion?.name)}&id=${encodeURIComponent(suggestion?.id)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-darkbg dark:text-white">
      <header className="bg-white shadow-sm dark:bg-darkbg">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link href="/" className="">
              <Image 
                src={googleLogo} 
                alt="Google" 
                width={120} 
                height={40} 
                priority 
                className="cursor-pointer"
              />
            </Link>

            <div className="md:ml-[50px] relative w-full lg:w-[500px]">
              <Suspense fallback={<div>Loading search parameters...</div>}>
                <SearchParamsClient />
              </Suspense>

              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                className="w-full px-4 py-2 border shadow-xl rounded-full focus:outline-none bg-gray-100 border-gray-300 text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              {suggestions?.length > 0 && !loading && (
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
          </div>

          <div className="flex items-center space-x-4">
            <Image 
              src={profileIcon} 
              alt="Profile" 
              width={40} 
              height={40} 
              className="cursor-pointer rounded-full"
            />
          </div>
        </div>

        <ul className="md:ml-[225px] flex space-x-6">
          <li className="text-blue-500"><a href="">All</a></li>
          <li className=""><a href="">News</a></li>
          <li className=""><a href="">Videos</a></li>
          <li className=""><a href="">Images</a></li>
          <li className=""><a href="">Maps</a></li>
          <li className=""><a href="">More</a></li>
        </ul>
      </header>

      <main className="flex flex-col mt-6 px-4">
        <h1 className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Showing results for {`"${inputValue}"`}
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="w-full max-w-4xl space-y-6">
          {!loading && results ? (
            <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800">
              <h2 className="text-xl font-semibold">Weather Data</h2>
              {results?.locality_weather_data?.temperature ? <p><strong>Temperature:</strong> {results?.locality_weather_data?.temperature}°C</p> : ""}
              {results?.locality_weather_data?.humidity ? <p><strong>Humidity:</strong> {results?.locality_weather_data?.humidity}%</p> : ""}
              {results?.locality_weather_data?.wind_speed ? <p><strong>Wind Speed:</strong> {results?.locality_weather_data?.wind_speed} m/s</p> : ""}
              {results?.locality_weather_data?.wind_direction ? <p><strong>Wind Direction:</strong> {results?.locality_weather_data?.wind_direction}°</p> : ""}
              {results?.locality_weather_data?.rain_intensity != null ? <p><strong>Rain Intensity:</strong> {results?.locality_weather_data?.rain_intensity} mm/h</p> : ""}
              {results?.locality_weather_data?.rain_accumulation ? <p><strong>Rain Accumulation:</strong> {results?.locality_weather_data?.rain_accumulation} mm</p> : ""}
            </div>
          ) : (
            <p>No weather data available</p>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-gray-200 text-gray-600 dark:bg-gray-900 dark:text-gray-400 p-4 mt-8">
        <div className="flex justify-between max-w-5xl mx-auto">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search Works</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchPage;
