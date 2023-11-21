import React, { useEffect, useState } from 'react';
import axios from 'axios';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Fetch station data from your API endpoint
    const fetchStations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stations');
        setStations(response.data.stations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStations();
  }, []);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=5e20139be243db79ae107e5c190e1ef4&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.2635727, 127.0286009),
          level: 10,
        });

        // Customize the marker image and size
        const markerImage = new window.kakao.maps.MarkerImage(
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
          new window.kakao.maps.Size(5, 5), // Width and height of the image
        );

        // Add markers for each station
        const markers = stations.map((station) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(station.y, station.x),
            map: map,
            image: markerImage, // Set the custom marker image
          });
          return marker;
        });

        // Create a Polyline to connect markers
        const polyline = new window.kakao.maps.Polyline({
          path: markers.map((marker) => marker.getPosition()),
          strokeWeight: 3,
          strokeColor: '#FF0000',
          strokeOpacity: 0.7,
        });

        // Add Polyline to the map
        polyline.setMap(map);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, [stations]);

  return <div id="map" style={{ width: '600px', height: '500px', borderRadius: '20px', marginRight: '200px' }}></div>;
};

export default MapComponent;
