import React, { useEffect, useState } from 'react';
import axios from 'axios';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent = () => {
  const [stations, setStations] = useState([]);
  const [buses, setBuses] = useState([]);

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
    // Fetch bus data from your API endpoint
    const fetchBuses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bus');
        setBuses(response.data.stations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBuses();
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

        const stations = [];
        const linePaths = [[], []];
        const markers = [[], []];
        function clearMarkersAndPaths(markers, paths) {
          for (const marker of markers) {
            marker.setMap(null);
          }
          markers.length = 0;

          for (const path of paths) {
            path.setMap(null);
          }
          paths.length = 0;
        }

        const fetchAndCreateMarkers = async (url, linePathIndex, markerIndex, markerSize) => {
          try {
            const response = await fetch('http://localhost:3000/api/stations');
            const data = await response.json();

            // stations 배열 초기화

            stations[linePathIndex] = [];

            for (const station of data.stations) {
              // 마커 이미지 경로 추가
              station.markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';

              const markerImage = new window.kakao.maps.MarkerImage(station.markerImageSrc, markerSize);
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(station.y, station.x),
                image: markerImage,
              });

              linePaths[linePathIndex].push(marker.getPosition());

              const infoWindow = new window.kakao.maps.InfoWindow({
                content: station.content,
              });
              window.kakao.maps.event.removeListener(marker, 'mouseover');
              window.kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infoWindow));
              window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infoWindow));

              // stations 배열에 추가
              stations[linePathIndex].push(station);
              markers[markerIndex].push(marker);
            }

            const polyline = new window.kakao.maps.Polyline({
              path: linePaths[linePathIndex],
              strokeWeight: 3,
              strokeColor: linePathIndex === 0 ? '#FF0000' : 'blue',
              strokeOpacity: 0.7,
              strokeStyle: 'solid',
            });

            polyline.setMap(map);
          } catch (error) {
            console.error(`Error fetching data from ${url}:`, error.message);
          }
        };

        const removeMarkers = (markerArray) => {
          for (const marker of markerArray) {
            marker.setMap(null);
          }
          markerArray.length = 0;
        };

        const fetchBusDataAndCreateMarkers = async () => {
          await fetchAndCreateMarkers('/api/stations', 0, 0, new window.kakao.maps.Size(5, 5));
        };

        const fetchAndCreateBusMarkers = async (url, markerIndex, busImageSrc) => {
          try {
            const response = await fetch(url);
            const busData = await response.json();

            removeMarkers(markers[markerIndex]);

            for (const busStation of busData.stations) {
              const station = stations[markerIndex].find((station) => station.stationId === busStation.stationId);

              if (station) {
                const busMarkerImage = new window.kakao.maps.MarkerImage(
                  busImageSrc,
                  new window.kakao.maps.Size(24, 35),
                );
                const busMarker = new window.kakao.maps.Marker({
                  map: map,
                  position: new window.kakao.maps.LatLng(station.y, station.x),
                  image: busMarkerImage,
                });

                const busInfowindow = new window.kakao.maps.InfoWindow({
                  content: busStation.content,
                });

                window.kakao.maps.event.addListener(
                  busMarker,
                  'mouseover',
                  makeOverListener(map, busMarker, busInfowindow),
                );
                window.kakao.maps.event.addListener(busMarker, 'mouseout', makeOutListener(busInfowindow));

                markers[markerIndex].push(busMarker);
              }
            }
          } catch (error) {
            console.error(`Error fetching bus data from ${url}:`, error.message);
          }
        };

        fetchBusDataAndCreateMarkers();
        setInterval(fetchBusDataAndCreateMarkers, 30000000);

        setInterval(
          () =>
            fetchAndCreateBusMarkers(
              'http://localhost:3000/api/bus',
              0,
              'https://www.freeiconspng.com/uploads/school-bus-icon-12.png',
            ),
          5000,
        );
      });

      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, [stations, buses]);

  return <div id="map" style={{ width: '600px', height: '500px', borderRadius: '20px', marginRight: '200px' }}></div>;
};

export default MapComponent;
