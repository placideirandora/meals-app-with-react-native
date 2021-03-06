import React, { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { SearchContainer } from './searchElements';
import { LocationContext } from '../../../../services/location/locationContext';

const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const handleChangeSearch = (Keyword) => setSearchKeyword(Keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <>
      <SearchContainer>
        <Searchbar
          icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
          onIconPress={onFavoritesToggle}
          placeholder="Search for a Location"
          onChangeText={handleChangeSearch}
          onSubmitEditing={() => searchKeyword && search(searchKeyword)}
          value={searchKeyword}
        />
      </SearchContainer>
    </>
  );
};

export default Search;
