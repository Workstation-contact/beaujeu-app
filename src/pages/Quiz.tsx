import React, { FC } from 'react';

import ComponentQUiz from '../components/ComponentQuiz';


export interface IQuizProps {}

const Quiz: FC<IQuizProps> = (props) => {

  return (
      <div className='quiz-page'>

        <ComponentQUiz/>
      </div>
  );
};

export default Quiz;