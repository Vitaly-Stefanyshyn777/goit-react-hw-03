import React, { ChangeEvent } from 'react';
import s from './SearchBox.module.css';

interface SearchBoxProps {
  searchUser: string;
  setSearchUser: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchUser, setSearchUser }) => {
  const handleSearchUser = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value.toLowerCase());
  };

  return (
    <div className={s.serchWrap}>
      <label>
        Find contact by name
        <input
          className={s.serchInput}
          type="text"
          value={searchUser}
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};

export default SearchBox;