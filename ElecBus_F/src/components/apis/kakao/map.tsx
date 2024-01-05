import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent: React.FC = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=5e20139be243db79ae107e5c190e1ef4&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.166062304539, 127.10342236587),
          level: 13,
        };
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });

    return () => {
      kakaoMapScript.removeEventListener('load', onLoadKakaoAPI);
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

  return <div id="map" style={{ width: '600px', height: '500px', borderRadius: '20px', marginRight: '200px' }}></div>;
};

export default MapComponent;
