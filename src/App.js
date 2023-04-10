import './App.css';
import Page1Comp from './component/Page1Comp/Page1Comp';
import Page2Comp from './component/Page2Comp/Page2Comp';
import Page3Comp from './component/Page3Comp/Page3Comp';
import Page4Comp from './component/Page4Comp/Page4Comp';
import HomePageComp from './component/HomePageComponent/HomePageComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>
            {/* <Route exact path="/" element={<HomePageComp />} />
            <Route path='/page1' element={<Page2Comp />} />
            <Route path='/page2' element={<Page3Comp />} />
            <Route path='/page3' element={<Page4Comp />} /> */}
             <Route path='/' element={<HomePageComp/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;



