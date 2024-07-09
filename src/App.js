import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {userData} from './data/Data'
import Timer from './data/Timer';
import Counter from './data/ClickOnePlus';
import Example from './data/Example';
import Component1 from './data/UseContact';
import Time from './data/Time';
import CallApi from './data/CallApi';
import SendProps from './data/SendProps';
import LearnUsestate from './data/LearnUsestate';
import RecievedProps from './data/RecievedProps';
import UsingRefHook from './UsingRefHook';
import UsingHookRef from './data/UsingHookRef';
import OnePlusUperAndTwoPlusNEcha from './data/OneButtonClickOnePlusAndTwoAdd';
import BgColorChange from './data/BgColorChange';
import EveryClickBgChange from './data/BgColorEveryClickChange';
import Webcamp from './data/Webcam';
import LearnWebCam from './data/LearnWebCam';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgeCalculation from './data/AgeCalculation';
import Countries from './data/ContriesList';
// import Timer from './data/Counter';
function App() {
// const [user,setUser]=useState(userData);
const [user,setUser]=useState([]);
const [loading,setLoading] = useState(false);
const fetchUser = async() => {
  const response = await fetch('https://64b51b44f3dbab5a95c6b7d9.mockapi.io/userData');
  const result = await response.json();
   setUser(result);
}

useEffect(()=>{     
fetchUser();
},[]);

// useEffect(()=>{
// alert("abc");
//   },[loading])

  return (
    <div className="App">
      {/* <AgeCalculation/> */}
      <Countries/>
      {/* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Webcamp/>}></Route>
          </Routes>
          </BrowserRouter> */}
      {/* <LearnWebCam/> */}
      {/* <BgColorChange/> */}
      {/* <EveryClickBgChange/> */}
      {/* <OnePlusUperAndTwoPlusNEcha/> */}
      {/* <UsingHookRef/> */}
      {/* <Counter/> */}
      {/* <LearnUsestate/> */}
      {/* <UsingRefHook/> */}
{/* <SendProps/> */}
{/* <RecievedProps/> */}
      {/* <Timer/>
      // <SendProps/> */}
      {/* <CallApi/> */}
      {/* <Component1/> */}
      {/* <Time/> */}
      {/* <Counter/> */}
      {/* <Example/> */}
    {/* <Timer></Timer> */}
      {/* {user.map((item,index)=>{
        const {name,Email,id} = item;
        return (
          <>
          <h1>{name}</h1>
          <h2>{Email}</h2>
          <h3>{id}</h3>
          </>
        )
      })} */}
      {/* <button onClick={()=>setLoading(!loading)}>Check</button> */}
    
    {/* <Webcamp/>y */}
    
    </div>
  
  );
}

export default App;
