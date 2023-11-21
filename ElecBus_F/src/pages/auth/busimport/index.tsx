import MainLayout from '../../../layouts';
import Table from '../../../components/antd/busimport/table1';
const MyPage = () => {
  return (
    <>
      <div
        style={{
          width: '1370px',
          margin: '0 auto',
        }}
      >
        <Table />
      </div>
      <div></div>
      <div></div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
