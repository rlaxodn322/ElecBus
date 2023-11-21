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

        // 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
          {
            title: '카카오',
            latlng: new kakao.maps.LatLng(37.564214, 127.001699),
          },
          {
            title: '생태연못',
            latlng: new kakao.maps.LatLng(35.95133, 126.951141),
          },
          {
            title: '텃밭',
            latlng: new kakao.maps.LatLng(36.995972, 127.926178),
          },
          {
            title: '근린공원',
            latlng: new kakao.maps.LatLng(37.757687, 128.873749),
          },

          {
            title: '근린공원',
            latlng: new kakao.maps.LatLng(35.848987, 128.72818),
          },
        ];

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = '/icons/icons/car.svg';
        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(50, 45);

          // 마커 이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return <div id="map" style={{ width: '600px', height: '500px', borderRadius: '20px', marginRight: '200px' }}></div>;
}
