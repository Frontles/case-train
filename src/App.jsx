import LeftSideBar from "./LeftSideBar";

import Contacts from "./Contacts";
import Chat from "./Chat";
import Frame from "./Frame";


function App() {
  return (
    <>
      <div className=" flex flex-col ">
        {/* Left Side Bar */}
        <LeftSideBar />


        <div className=" ml-24 flex flex-row pt-4 ">
          {/* Contacts */}
          <Contacts />
          {/* Chat */}
          <Chat />
          {/* Frame */}
          <Frame />
        </div>

      </div>

    </>
  );
}

export default App;
