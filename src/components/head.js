import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={"Gatsby Starter"}
    />
  );
};

export default Head;
