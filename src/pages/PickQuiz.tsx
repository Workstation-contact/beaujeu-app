import React, { FC } from 'react';
import ComponentPickQuiz from '../components/ComponentPickQuiz';


export interface IPickQuizProps {}

const PickQuiz: FC<IPickQuizProps> = (props) => {

  return (
      <div className='pickquiz-page'>
         <ComponentPickQuiz/>
      </div>
  );
};

export default PickQuiz;