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
  const svgWidth = 200;
  const svgHeight = 1500;
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

  // 곡선의 중간 지점을 계산하는 함수
  const calculateCurveMidPoint = (x1, y1, x2, y2) => {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    return [cx, cy];
  };

  const busImageSrc = 'https://www.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=55212&fileTy=MEDIA&fileNo=2';
  const enlargedBusRadius = 30;

  return (
    <div>
      <svg width={svgWidth} height={svgHeight} style={{ cursor: 'pointer' }}>
        {/* 노선 곡선 그리기 */}
        {busStops.map((stop, index) => {
          if (index < busStops.length - 1) {
            const startX = svgWidth / 2;
            const startY = margin + (index * (svgHeight - 2 * margin)) / (busStops.length - 1);
            const endX = svgWidth / 2;
            const endY = margin + ((index + 1) * (svgHeight - 2 * margin)) / (busStops.length - 1);

            // 중간 지점 계산
            const [midX, midY] = calculateCurveMidPoint(startX, startY, endX, endY);

            return (
              <path
                key={index}
                d={`M${startX} ${startY} Q${midX} ${midY} ${endX} ${endY}`}
                style={{ stroke: 'black', fill: 'none', strokeWidth: lineStrokeWidth }}
              />
            );
          }
          return null;
        })}

        {/* 정류장 표시 */}
        {busStops.map((stop, index) => (
          <g
            key={index}
            transform={`translate(${svgWidth / 2}, ${
              margin + (index * (svgHeight - 2 * margin)) / (busStops.length - 1)
            })`}
            onMouseEnter={() => handleMouseEnterStop(stop.stationId)}
            onMouseLeave={handleMouseLeaveStop}
          >
            {/* 정류장 원 그리기 */}
            <circle r={stopRadius} fill={hoveredStop === stop.stationId ? 'red' : 'black'} />

            {/* 정류장 이름 표시 */}
            {hoveredStop === stop.stationId && (
              <text
                x={-busRadius * 10}
                textAnchor="middle"
                style={{
                  fontSize: '10px',
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
                      width={enlargedBusRadius * 2}
                      height={enlargedBusRadius * 2}
                      x={enlargedBusRadius}
                      y={busIndex * busGap + (buses.length - 1 - busIndex) * busGap - enlargedBusRadius + 20}
                    />
                    {/* Content */}
                    {hoveredBuses[busIndex] && (
                      <foreignObject
                        x={-enlargedBusRadius * 2 + 60}
                        y={-enlargedBusRadius - 10}
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
