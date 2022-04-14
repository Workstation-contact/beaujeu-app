import React, { useState } from "react";
import Obj3D from '../Object3d/app'
import Timer from "../Timer/index"

export class ClickityClick extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false, name: true};
      }

      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
      handleName(nom: boolean) {
        this.setState({name: nom});
        this.setState({isLoggedIn:nom})
      }
        

        render() {
            const isLoggedIn = this.state.isLoggedIn;
            const name = this.state.name;
            let button;
            let obj;
            const updateName = (name: boolean):void => {
                this.handleName(name)
            }
        
            if (isLoggedIn) {
              // button = <Timer time={30} updateName={updateName}/>;
              obj = <Obj3D/>;
            } else if(!name){
                button = <p>Salut</p>
            }
            else {
              button = <LoginButton onClick={this.handleLoginClick} />;
              console.log(this.state.name)
            //   updateName(true);
            }

            return (
              <div className="Loader">
                {button}
                {/* {obj} */}
                <p>{this.state.name}</p>
              </div>
            );
          }
  }

  
  

  function LoginButton(props:any) {
    return (
      <p>Cliquez sur le rocher pour commencer l'expérience</p>
    );
  }
  
  
  export default ClickityClick;