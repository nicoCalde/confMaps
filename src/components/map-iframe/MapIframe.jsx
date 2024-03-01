import React from 'react';
import './map-iframe.css'

const MapIframe = ({ selectedId }) => {
    return (
        <div className="iframe-container">
            <iframe
                src={`https://www.google.com/maps/d/u/1/embed?mid=${selectedId || '1rFdmLdXqRpnX3mU7O467vaNHfn3UZc0&usp=sharing'}`}
                title="confiterías maps"
            ></iframe>
        </div>
    );
};

export default MapIframe;