import React, { FC, Suspense, useState } from 'react';
import Header from '../components/Header';
// import Obj3D from '../components/Object3d/app'
import { createRoot } from 'react-dom/client'
import { ClickityClick } from '../components/Button/index';
import { Html, useGLTF, useProgress } from '@react-three/drei';
import Rock from '../components/Object3d/Obj7';
import Lottie from 'lottie-react';
// import Model from '../components/Object3d/Obj4'
import loading from "../components/lottie/loading.json";



export interface IRockPageProps {}
const RockPage: FC<IRockPageProps> = (props) => {
  const [clickedButton, setClickedButton] = useState('');
  // useGLTF.preload(Model)

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };



  return (
      <div className='rock-page'> 
        <Rock/>    
      </div>
  );
};

export default RockPage;