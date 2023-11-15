import MainLayout from '../../../layouts';
import Table from '../../../components/antd/busimport/table';

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
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
