import React, { useState } from 'react';
import MenuButton from '../components/menu-button/MenuButton';
import MapIframe from '../components/map-iframe/MapIframe';

function Maps() {
    const [selectedId, setSelectedId] = useState('');
  
    const handleMenuClick = (id) => {
      setSelectedId(id);
    };
  
    return (
      <div>
        <MenuButton handleMenuClick={handleMenuClick} />
        <MapIframe selectedId={selectedId} />
      </div>
    );
  };
  
  export default Maps;