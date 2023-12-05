import MainLayout from '../../../layouts/Main';
import Table from '../../../components/antd/busimport/table';

const MyPage = () => {
  return (
    <>
      <div
        key="table-container" /* 예시로 추가한 key */
        style={{
          width: '1370px',
          margin: '0 auto',
        }}
      >
        <Table />
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
