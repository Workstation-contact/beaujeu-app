import React, { Component, FC } from 'react';
import Header from '../components/Header';
import ComponentCollection from '../components/ComponentCollection';

export interface IHomevPageProps {}

const HomevPage: FC<IHomevPageProps> = (props) => {

  return (
      <div className='homev-page'>
        <ComponentCollection/>
      </div>
  );
};

export default HomevPage;