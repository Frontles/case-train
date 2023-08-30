import LeftSideBar from "./LeftSideBar";

import Contacts from "./Contacts";
import Chat from "./Chat";
import Frame from "./Frame";


function App() {
  return (
    <>
      <div className=" flex  ">
        {/* Left Side Bar */}
        <LeftSideBar />


        <div className=" flex container pt-4 space-x-10 ">
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
