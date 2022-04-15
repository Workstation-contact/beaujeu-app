import React, { FC } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export interface IPickQuizProps {}

const PickQuiz: FC<IPickQuizProps> = (props) => {

  return (
      <div className='pickquiz-page'>
        <div className='pickquiz-component-container'>
            <div className='pickquiz-title-container'>
                <h1>CHOISSISSEZ UNE OEUVRE</h1>
            </div>
            <div className='pickquiz-grid-container'>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-one">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-two">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-three">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-four">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-five">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-six">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-seven">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-eight">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-nine">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
                <Link reloadDocument to="/rockpage" className="pickquiz-grid-ten">
                    <div>
                        <div>
                            <p>Nom de la pierre</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
      </div>
  );
};

export default PickQuiz;