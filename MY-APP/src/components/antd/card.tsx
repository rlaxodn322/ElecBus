import React from 'react';
import { Col, Row } from 'antd';
import MapComponent from '../apis/kakao/map';
import Table from './table';
const style: React.CSSProperties = {
  padding: '8px 0',
  border: '1px solid black',
  height: '150px',
  borderRadius: '20px',
  boxShadow: '2px 2px 2px 2px grey',
};
const style1: React.CSSProperties = {
  marginLeft: '40px',
};
const style2: React.CSSProperties = {
  marginLeft: '50px',
  fontSize: '20px',
  fontWeight: 'bold',
};
const App: React.FC = () => (
  <>
    <div
      style={{
        width: '1370px',
        height: '850px',
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
            <img style={{ width: '20px', color: 'darkblue' }} src="/icons/icons/map.svg"></img> 운행지도
          </h1>
          <MapComponent></MapComponent>
        </Col>

        <Col span={12}>
          <div style={{ width: '700px', height: '300px' }}>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1 style={style}>
                    보유차량<img style={style1} src="/icons/icons/car.svg"></img>
                  </h1>
                </div>
              </Col>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1 style={style}>
                    운행차량
                    <img style={style1} src="/icons/icons/car.svg"></img>
                  </h1>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1 style={style}>
                    대기차량
                    <img style={style1} src="/icons/icons/car.svg"></img>
                  </h1>
                </div>
              </Col>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1 style={style}>
                    고장차량
                    <img style={style1} src="/icons/icons/car.svg"></img>
                  </h1>
                </div>
              </Col>
            </Row>
          </div>

          <h1 style={{ color: 'darkblue' }}>
            <img style={{ marginTop: '50px', width: '20px', color: 'darkblue' }} src="/icons/icons/map.svg"></img>{' '}
            운행중 버스정보
          </h1>
          <Row>
            <div style={{ border: '2px solid black', width: '600px', height: '600px' }}>
              <div
                style={{
                  border: '1px solid black',
                  width: '600px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'darkblue',
                  color: 'white',
                }}
              >
                <div style={style2}>차량번호</div>
                <div style={style2}>노선</div>
                <div style={style2}>위치</div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>

    <div
      style={{
        width: '1370px',

        margin: '0 auto',
      }}
    >
      <div id="map" style={{ width: '600px', height: '750px', borderRadius: '20px' }}>
        <Row>
          <div style={{ border: '2px solid black', width: '600px', height: '600px' }}>
            <div
              style={{
                border: '1px solid black',
                width: '600px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                background: 'darkblue',
                color: 'white',
              }}
            >
              <div style={style2}>차량번호</div>
              <div style={style2}>노선</div>
              <div style={style2}>고장정보</div>
            </div>
          </div>
        </Row>
      </div>
      ;
    </div>
  </>
);

export default App;
