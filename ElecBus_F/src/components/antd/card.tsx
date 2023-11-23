import React from 'react';
import { Col, Row, Button } from 'antd';
import MapComponent from '../apis/kakao/map1';
import Bus from '../../pages/bus';
import 'antd-button-color/dist/css/style.css';

const style: React.CSSProperties = {
  border: '1px solid lightgrey',
  width: '280px',
  height: '150px',
  borderRadius: '20px',
  boxShadow: '2px 2px 2px 2px lightgrey',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '30px',
  padding: '30px',
};
const style1: React.CSSProperties = { marginRight: '20px', fontSize: '20px', fontWeight: 'bold' };
const style2: React.CSSProperties = {
  marginLeft: '70px',
  fontSize: '20px',
  fontWeight: 'bold',
};
const style3: React.CSSProperties = {
  marginTop: '20px',
  marginLeft: '60px',
  fontSize: '20px',
  fontWeight: 'bold',
};
const parentStyle: React.CSSProperties = {
  width: '100%', // 조절 필요
  maxHeight: '600px', // 조절 필요
  overflowY: 'auto',
  margin: '0 auto',
  border: '2px solid lightgrey',
  height: '600px',
  boxShadow: '3px 3px 3px 3px lightgrey',
};
const arr1 = ['서울71자1565', '90', '서울', '미운행'];
const arr3 = ['강원71자1565', '90', '대구', '미운행'];
const arr4 = ['충청71자1565', '90', '차고지', '미운행'];
const arr5 = ['군산71자1565', '90', '차고지', '미운행'];
const arr2 = ['대구71자1565', '90', '강원', '미운행'];
const arr6 = ['강원70자8021', '33', '엔진', '미운행'];

const App: React.FC = () => (
  <>
    <div
      style={{
        width: '1370px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        paddingTop: '20px',
      }}
    >
      <Row>
        <Col span={12}>
          <h1 style={{ color: 'black' }}>
            {' '}
            <img style={{ width: '20px', color: 'black' }} src="/icons/icons/map.svg"></img> 운행지도
          </h1>
          <MapComponent></MapComponent>
          <div
            style={{
              width: '1370px',
              margin: '0 auto',
            }}
          >
            <div style={{ width: '600px', height: '750px', borderRadius: '20px' }}>
              <h1 style={{ color: 'black' }}>
                <img style={{ marginTop: '10px', width: '20px', color: 'black' }} src="/icons/icons/map.svg"></img>{' '}
                운행중 고장정보
              </h1>
              <Row>
                <div
                  style={{
                    border: '2px solid lightgrey',
                    width: '600px',
                    height: '600px',
                    boxShadow: '3px 3px 3px 3px lightgrey',
                  }}
                >
                  <div
                    style={{
                      border: '1px solid lightgrey',
                      width: '600px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      background: 'white',
                      color: 'black',
                    }}
                  >
                    <div style={style2}>차량번호</div>
                    <div style={style2}>노선</div>
                    <div style={style2}>고장정보</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={style3}>{arr6[0]}</div>
                    <div style={style3}>{arr6[1]}</div>
                    <div style={style3}>{arr6[2]}</div>
                    <Button
                      type="primary"
                      danger
                      style={{
                        marginTop: '16px',
                        marginLeft: '60px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        boxShadow: '2px 2px 2px 2px lightgrey',
                      }}
                    >
                      고장정보
                    </Button>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Col>

        <Col span={12}>
          <div style={{ width: '700px', height: '300px' }}>
            <Row style={{ marginTop: '50px' }} gutter={[16, 24]}>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1>보유차량</h1>
                  <h1 style={style}>
                    80대<img style={style1} src="/icons/icons/bus.svg"></img>
                  </h1>
                </div>
              </Col>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1>운행차량</h1>
                  <h1 style={style}>
                    5대<img style={style1} src="/icons/icons/bus-go.svg"></img>
                  </h1>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 24]} style={{ marginTop: '-20px' }}>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1>대기차량</h1>
                  <h1 style={style}>
                    73대<img style={style1} src="/icons/icons/bus-wait.svg"></img>
                  </h1>
                </div>
              </Col>
              <Col className="gutter-row" span={10}>
                <div>
                  <h1>고장차량</h1>
                  <h1 style={style}>
                    2대 <img style={style1} src="/icons/icons/bus-as.svg"></img>
                  </h1>
                </div>
              </Col>
            </Row>
          </div>

          <h1 style={{ color: 'black' }}>
            <img style={{ marginTop: '160px', width: '20px', color: 'black' }} src="/icons/icons/map.svg"></img> 운행중
            버스정보
          </h1>
          <div
            style={{
              height: '100%',
              display: 'flex',

              margin: '0 auto',
              paddingTop: '20px',
            }}
          >
            <Row>
              <div style={parentStyle}>
                <div
                  style={{
                    border: '1px solid lightgrey',
                    width: '600px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'white',
                    color: 'black',
                  }}
                >
                  <div style={style2}>버스 노선도</div>
                </div>
                <Bus />
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default App;
