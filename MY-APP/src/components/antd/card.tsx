import React from 'react';
import { Col, Row } from 'antd';
import MapComponent from '../apis/kakao/map';
import Table from './table';
const style: React.CSSProperties = {
  padding: '8px 0',
  margin: '40px',
  border: '1px solid black',
  height: '150px',
  borderRadius: '20px',
  boxShadow: '1px grey',
};
const App: React.FC = () => (
  <>
    <div
      style={{
        border: '1px solid black',
        width: '1370px',
        height: '1000px',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        paddingTop: '20px',
      }}
    >
      <Row>
        <Col span={12}>
          <h1 style={{ color: 'darkblue' }}>
            {' '}
            <img style={{ width: '20px', color: 'darkblue', marginLeft: '50px' }} src="/icons/icons/map.svg"></img>{' '}
            운행지도
          </h1>
          <MapComponent></MapComponent>
        </Col>
        <Col span={12}>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={10}>
              <div>
                <h1 style={style}>
                  보유차량<img src="/icons/icons/car.svg"></img>
                </h1>
              </div>
            </Col>
            <Col className="gutter-row" span={10}>
              <div>
                <h1 style={style}>
                  운행차량
                  <img src="/icons/icons/car.svg"></img>
                </h1>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={10}>
              <div>
                <h1 style={style}>
                  대기차량
                  <img src="/icons/icons/car.svg"></img>
                </h1>
              </div>
            </Col>
            <Col className="gutter-row" span={10}>
              <div>
                <h1 style={style}>
                  고장차량
                  <img src="/icons/icons/car.svg"></img>
                </h1>
              </div>
            </Col>
          </Row>
          <h1 style={{ color: 'darkblue' }}>
            <img style={{ width: '20px', color: 'darkblue' }} src="/icons/icons/map.svg"></img> 운행중 버스정보
          </h1>
          <Row>
            <Col span={20}>
              <Table />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </>
);

export default App;
