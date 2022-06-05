import Helmet from 'react-helmet';
import { ManageSinister } from '../../components/ManageSinister';

const ManageSinisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Gestionar mi siniestro</title>
      </Helmet>
      <ManageSinister />
    </>
  );
};

export default ManageSinisterPage;
