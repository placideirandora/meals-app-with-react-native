import React from 'react';

import Search from '../../components/Search';
import { Map, MapContainer } from './mapElements';

const MapScreen = () => {
  return (
    <MapContainer>
      <Search />
      <Map />
    </MapContainer>
  );
};

export default MapScreen;
