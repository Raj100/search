'use client';

import { useSearchParams } from 'next/navigation';

const SearchParamsClient = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const id = searchParams.get('id') || '';

  return (
    <>
      {query && <p>Search query: {query}</p>}
      {id && <p>Search ID: {id}</p>}
    </>
  );
};

export default SearchParamsClient;
