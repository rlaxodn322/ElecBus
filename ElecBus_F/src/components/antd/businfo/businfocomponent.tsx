// BusInfoComponent.tsx
import React from 'react';
const style: React.CSSProperties = {
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '70px',
  fontSize: '20px',
  background: 'rgb(41, 112, 199)',
  border: 'none',
  color: 'white',
  fontWeight: 'bold',
  margin: '20px',
  cursor: 'pointer',
};
const BusInfoComponent: React.FC<{ busNumber: number }> = ({ busNumber }) => {
  return (
    <div className="businfo" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <button style={style}>{`${busNumber}호기`}</button>
      {/* 다른 정보 표시 */}
    </div>
  );
};

export default BusInfoComponent;
