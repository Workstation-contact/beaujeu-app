import React, { FC } from 'react';
import './index.scss';

export interface IPickQuizProps {}

const PickQuiz: FC<IPickQuizProps> = (props) => {

  return (
      <div className='pickquiz-page'>
        <div className='pickquiz-component-container'>
            <div className='pickquiz-title-container'>
                <h1>CHOISSISSEZ UNE OEUVRE</h1>
            </div>
            <div className='pickquiz-grid-container'>
                <div className="pickquiz-grid-one">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-two">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-three">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-four">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-five">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-six">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-seven">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-eight">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-nine">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
                <div className="pickquiz-grid-ten">
                    <div>
                        <p>Nom de la pierre</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default PickQuiz;