'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../../redux/slices/searchSlice';
import { RootState, AppDispatch } from '../../redux/store';

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const dispatch = useDispatch<AppDispatch>();
  const { results, loading, error } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="space-y-4">
        {results.map((result, index) => (
          <li key={index} className="p-4 border-b">
            <h2 className="text-xl font-semibold">{result.title}</h2>
            <p>{result.description}</p>
            <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {result.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
