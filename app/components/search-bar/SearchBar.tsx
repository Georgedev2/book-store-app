"use client"
import Image from '@/node_modules/next/image';
import { useState } from 'react';
import searchIcon from '../icons/search-icon.svg';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQuery = (e: any) => {
    console.log(e);
  };

  return (
    <div className={styles.searchBar}>
      <Image src={searchIcon} alt="Search icon" />
      <input
        type="text"
        placeholder="Search books..."
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default SearchBar;
