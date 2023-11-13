import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapComponent() {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=5e20139be243db79ae107e5c190e1ef4&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        var options = {
          center: new window.kakao.maps.LatLng(37.166062304539, 127.10342236587),
          level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return (
  
      <div id="map" style={{ width: '600px', height: '750px', margin: '0 auto', borderRadius:'20px'}}></div>
    
  );
}
