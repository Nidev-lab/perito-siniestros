import React from 'react';
import Helmet from 'react-helmet';
import Budget from '../../components/Budget/Budget';

const BudgetPage = () => {
  return (
    <>
      <Helmet>
        <title>Solicitud de presupuestos</title>
      </Helmet>
      <Budget />
    </>
  );
};

export default BudgetPage;
