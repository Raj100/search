'use client';

import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchSearchResults,setQuery } from '@/redux/slices/searchSlice';
import { useEffect } from 'react';

const SearchParamsClient = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const id = searchParams.get('id') || '';
  const dispatch = useDispatch<AppDispatch>();
  const querychange=useSelector((state: RootState) => state.search.searchQuery);
  useEffect(() => {
    dispatch(setQuery(query));
    dispatch(fetchSearchResults(id));
  }, [query, id, dispatch,querychange]);
  return (
    <>
      {/* {query && <p>Search query: {query}</p>}
      {id && <p>Search ID: {id}</p>} */}
    </>
  );
};

export default SearchParamsClient;
