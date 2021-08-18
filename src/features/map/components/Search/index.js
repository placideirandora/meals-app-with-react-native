import { Searchbar } from 'react-native-paper';
import React, { useState, useContext, useEffect } from 'react';

import { SearchContainer } from './searchElements';
import { LocationContext } from '../../../../services/location/locationContext';

const Search = () => {
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
          icon="map"
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
