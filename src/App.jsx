import LeftSideBar from "./LeftSideBar";


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from "./Table";
import Home from "./Home"


function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" flex flex-col ">
          {/* Left Side Bar */}
          <LeftSideBar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/table' Component={Table} />


          </Routes>



        </div>


      </BrowserRouter>

    </>
  );
}

export default App;
