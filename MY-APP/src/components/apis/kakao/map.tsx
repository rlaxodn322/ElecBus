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
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d122bf6e8fc6e91556445ca028dcc4be&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        var options = {
          center: new window.kakao.maps.LatLng(37.166062304539, 127.10342236587),
          level: 6,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '350px', margin: '10px 0 10px 0' }}></div>
    </div>
  );
}
