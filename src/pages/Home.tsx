import React, { Component, FC } from 'react';
import Header from '../components/Header';
import ComponentCollection from '../components/ComponentCollection';

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = (props) => {

  return (
      <div className='home-page'>
        <ComponentCollection/>
      </div>
  );
};

export default HomePage;