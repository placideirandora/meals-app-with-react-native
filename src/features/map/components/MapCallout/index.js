import React from 'react';

import CompactRestaurantInfo from '../../../../components/restaurant/CompactRestaurantInfo';

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
};

export default MapCallout;
