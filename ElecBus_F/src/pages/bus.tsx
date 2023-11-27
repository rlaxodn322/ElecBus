import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BusStop {
  stationId: string;
  stationName: string;
  // 다른 정류장 속성들을 필요에 따라 추가할 수 있음
}

interface Bus {
  stationId: string;
  busNumber: string;
  content: string;
  // 다른 버스 속성들을 필요에 따라 추가할 수 있음
}

interface HoveredBus {
  stationId: string;
  busNumber: string;
  content: string;
}

const BusRouteMap: React.FC = () => {
  const [busStops, setBusStops] = useState<BusStop[]>([]);

  const [buses, setBuses] = useState<Bus[]>([]);
  const [hoveredStop, setHoveredStop] = useState<string | null>(null);
  const [hoveredBuses, setHoveredBuses] = useState<HoveredBus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseStations = await axios.get('http://localhost:3000/api/stations');
        const dataStations = responseStations.data;

        if (dataStations && dataStations.stations) {
          const stops: BusStop[] = dataStations.stations;
          const turnYnIndex = stops.findIndex((stop) => stop.turnYn === 'Y');
          if (turnYnIndex !== -1) {
            // If turnYn is 'Y', remove data from turnYnIndex onward
            stops.splice(turnYnIndex);
          }

          setBusStops(stops);
        } else {
          console.error('예상하지 못한 정류장 데이터 형식:', dataStations);
        }

        const responseBuses = await axios.get('http://localhost:3000/api/bus');
        const dataBuses: Bus[] = responseBuses.data.stations;

        if (Array.isArray(dataBuses)) {
          setBuses(dataBuses);
          setHoveredBuses(Array(dataBuses.length).fill(null));
        } else {
          console.error('예상하지 못한 버스 데이터 형식:', responseBuses.data);
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();

    // 주기적으로 버스 위치 업데이트
    const intervalId = setInterval(fetchData, 5000); // 5초마다 업데이트

    // 컴포넌트 언마운트 시 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(intervalId);
  }, []);

  // SVG 너비, 높이, 여백 설정
  const svgWidth = 300;
  const svgHeight = 1000;
  const margin = 20;

  // 뷰포트 내부 요소들의 간격 및 크기 설정
  const stopRadius = 5;
  const busRadius = 5;
  const busGap = -4;
  const lineStrokeWidth = 2;

  // 마우스 이벤트 핸들러
  const handleMouseEnterStop = (stopId) => {
    setHoveredStop(stopId);
  };

  const handleMouseLeaveStop = () => {
    setHoveredStop(null);
  };

  const handleMouseEnterBus = (busIndex, stationId, busNumber, content) => {
    setHoveredBuses((prev) => {
      const newHoveredBuses = [...prev];
      newHoveredBuses[busIndex] = { stationId, busNumber, content };
      return newHoveredBuses;
    });
  };

  const handleMouseLeaveBus = (busIndex) => {
    setHoveredBuses((prev) => {
      const newHoveredBuses = [...prev];
      newHoveredBuses[busIndex] = null;
      return newHoveredBuses;
    });
  };

  const busImageSrc = 'https://www.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=55212&fileTy=MEDIA&fileNo=2';
  const enlargedBusRadius = 30;

  return (
    <div>
      <h1 style={{ marginLeft: '125px' }}>상행</h1>
      <svg width={svgWidth} height={svgHeight} style={{ cursor: 'pointer' }}>
        {busStops.map((stop, index) => {
          const startX = svgWidth / 2;
          const startY = margin + (index * (svgHeight - 2 * margin)) / (busStops.length - 1);
          const endX = svgWidth / 2;
          const endY = margin + ((index + 1) * (svgHeight - 2 * margin)) / (busStops.length - 1);

          return (
            <g key={index}>
              <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                style={{ stroke: 'blue', fill: 'none', strokeWidth: lineStrokeWidth }}
              />
            </g>
          );
        })}

        {busStops.map((stop, index) => (
          <g
            key={index}
            transform={`translate(${svgWidth / 2}, ${
              margin + (index * (svgHeight - 2 * margin)) / (busStops.length - 1)
            })`}
            onMouseEnter={() => handleMouseEnterStop(stop.stationId)}
            onMouseLeave={handleMouseLeaveStop}
          >
            {/* 정류장 ▼ 그리기 */}
            <polygon
              points={`0,${stopRadius * 1} ${stopRadius},-${stopRadius * 1.5} -${stopRadius},-${stopRadius * 1.5}`}
              fill={hoveredStop === stop.stationId ? 'black' : 'blue'}
            />
            {/* 정류장 이름 표시 */}
            {hoveredStop === stop.stationId && (
              <text
                x={-busRadius * 17}
                textAnchor="middle"
                style={{
                  fontSize: '12px',
                  fill: 'black',
                  visibility: hoveredStop ? 'visible' : 'hidden',
                }}
              >
                {stop.stationName}
              </text>
            )}

            {/* 버스 표시 */}
            {buses.map((bus, busIndex) => {
              if (bus.stationId === stop.stationId) {
                return (
                  <g
                    key={busIndex}
                    onMouseEnter={() => handleMouseEnterBus(busIndex, bus.stationId, bus.busNumber, bus.content)}
                    onMouseLeave={() => handleMouseLeaveBus(busIndex)}
                  >
                    {/* 큰 이미지로 버스 표시 */}
                    <image
                      href={busImageSrc}
                      width={enlargedBusRadius * 1.5}
                      height={enlargedBusRadius * 1.5}
                      x={enlargedBusRadius + 20}
                      y={busIndex * busGap + (buses.length - 1 - busIndex) * busGap - enlargedBusRadius + 20}
                    />
                    {/* Content */}
                    {hoveredBuses[busIndex] && (
                      <foreignObject
                        x={-enlargedBusRadius * 2 + 80}
                        y={-enlargedBusRadius - 30}
                        width="200"
                        height="200"
                      >
                        <div
                          style={{
                            fontSize: '15px',
                            color: 'black',
                            visibility: 'visible',
                            marginLeft: '7px',
                          }}
                          dangerouslySetInnerHTML={{ __html: hoveredBuses[busIndex].content }}
                        />
                      </foreignObject>
                    )}
                  </g>
                );
              }
              return null;
            })}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BusRouteMap;
