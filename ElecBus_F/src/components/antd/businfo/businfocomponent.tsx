// BusInfoComponent.tsx
import React from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/auth/businfocopy?busNumber=${busNumber}`);
  };

  return (
    <div className="businfo" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <button style={style} onClick={handleButtonClick}>
        {`${busNumber}호기`}
      </button>
      {/* 다른 정보 표시 */}
    </div>
  );
};

export default BusInfoComponent;
