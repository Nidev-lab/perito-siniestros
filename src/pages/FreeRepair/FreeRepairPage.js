import Helmet from 'react-helmet';
import { FreeRepair } from '../../components/FreeRepair';

const FreeRepairPage = () => {
  return (
    <>
      <Helmet>
        <title>Reparación sin costo</title>
      </Helmet>
      <FreeRepair />;
    </>
  );
};

export default FreeRepairPage;
