import React from 'react'
import './App.css'
import Mrk from "./Mrk.jpg";
import Timer from "./Timer"

    
  class App extends React.Component {

    state = {
      fullName : 'Mark zukerburg' ,
      bio : 'Hello from USA' ,
      imgSrc : <img className='image' src={Mrk}  alt='Mrk' /> ,    
      profession : 'Busnessman' , }
    

      render() {
            return(
            <div className='Profil'>
            <h1 >  FullName : {this.state.fullName}        </h1>
            <h1>  Bio :   {this.state.bio }               </h1> 
            <h1>            {this.state.imgSrc}            </h1>
            <h1>  Profession :  {this.state.profession}      </h1> 
            <Timer/>  
            <button>Show/Hide</button>
            </div>
            
              )  
            }
          }
            



  export default App ; 