import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { 
  Routes,
  Route, } from 'react-router-dom';


const App=(props)=>{
  const pageSize = 6;
  // let apiKey = "3c9a38a427e541c3a31c8117b9552043"
  // let apiKey = "658a984a106741b8a707425d5f8c7735"
  // let apiKey = "5ce747d1a6ec44468ce52c4755681fb0"
  // let apiKey = "c39ade1cb5264e3d98dfe3942b938e61"
  let apiKey = "418f3469ca7840bfbc086cb76625018c"
  const [progress,setProgress] = useState(0)
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <NavBar/>
      <Routes>
      <Route path = "/NewsMonkey" element={<News setProgress = {setProgress} pageSize = {pageSize} country={"in"} category={"general"} apiKey={apiKey}/>}></Route>
      <Route exact path = "/entertainment" element={<News setProgress = {setProgress} key="entertainment" pageSize = {pageSize} country={"in"} category={"entertainment"} apiKey={apiKey}/>}></Route>
      <Route exact path = "/business" element={<News setProgress = {setProgress} key="business" pageSize = {pageSize} country={"in"} category={"business"} apiKey={apiKey}/>}></Route>
      <Route exact path = "/health" element={<News setProgress = {setProgress} key="health" pageSize = {pageSize} country={"in"} category={"health"} apiKey={apiKey}/>}></Route>
      <Route exact path = "/science" element={<News setProgress = {setProgress} key="science" pageSize = {pageSize} country={"in"} category={"science"} apiKey={apiKey}/>}></Route>
      <Route exact path = "/sports" element={<News setProgress = {setProgress} key="sports" pageSize = {pageSize} country={"in"} category={"sports"} apiKey={apiKey}/>}></Route>
      <Route exact path = "/technology" element={<News setProgress = {setProgress} key="technology" pageSize = {pageSize} country={"in"} category={"technology"} apiKey={apiKey}/>}></Route>
      </Routes>
      </>
    )
  }
export default App
