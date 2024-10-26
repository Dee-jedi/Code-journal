import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(DataContext);

  return (
    <form
      onSubmit={(e) => e.preventDefault}
      className="mb-4 mt-2 flex justify-center"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Type your search"
        className="focus:border-teal-500 outline-none border bg-white rounded-full py-2 px-6 placeholder:text-slate-300 text-[#222] w-3/4"
      />
    </form>
  );
};

export default Search;
