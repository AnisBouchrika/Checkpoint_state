import React from 'react'
import './App.css'
import Mrk from "./Mrk.jpg";
import Timer from "./Timer"

    
  class App extends React.Component {

    state = {
      isShow: false,
      fullName : 'Mark zukerburg' ,
      bio : 'Hello from USA' ,
      imgSrc : <img className='image' src={Mrk}  alt='Mrk' /> ,    
      profession : 'Busnessman' , };
    toggleIsShow = () =>{
      this.setState({isShow: !this.state.isShow
      });
    };

      render() {
            return(
            <div className='Profile'>
          <button onClick={()=> this.toggleIsShow()}>Show/Hide Profile</button>
          {this.state.isShow &&(
            <React.Fragment>
            <h1 >  FullName : {this.state.fullName}        </h1>
            <h1>  Bio :   {this.state.bio }               </h1> 
            <h1>            {this.state.imgSrc}            </h1>
            <h1>  Profession :  {this.state.profession}      </h1> 
            <Timer/>  
            </React.Fragment>
            )}
            </div>
            
              )  
            }
          }
            



  export default App ; 