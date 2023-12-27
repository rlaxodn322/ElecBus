// BusDataModal.tsx
import React from 'react';
import { Modal, Row, Col } from 'antd';

const BusDataModal = ({ visible, data, onCancel }) => {
  const style = {
    padding: '8px 0',
    width: '115px',
    height: '70px',
    borderRadius: '10px',
    borderBottom: '1px solid lightgrey',
    borderRight: '1px solid lightgrey',
    borderLeft: '1px solid lightgrey',
    boxShadow: '1px 1px 1px 1px lightgrey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '11px',
  };

  const determineBackgroundColor = (label, info) => {
    let backgroundColor = 'transparent';

    // 여기에 색상 결정 로직 추가

    return backgroundColor;
  };

  return (
    <Modal title="상세 정보" visible={visible} onCancel={onCancel} footer={null}>
      {data && data.length > 0 ? (
        <Row gutter={1}>
          {data.map((item, index) => (
            <Col key={index} span={7.8}>
              <div style={{ margin: '5px', width: 'max-content' }}>
                <div
                  style={{
                    ...style,
                    background: determineBackgroundColor(item.label, item.info),
                    color: determineBackgroundColor(item.label, item.info) === '#FF6347' ? 'white' : '#333',
                  }}
                >
                  <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{item.label}</div>
                  {item.info && <div>{item.info}</div>}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </Modal>
  );
};

export default BusDataModal;
