import React from 'react'
import Contacts from "./Contacts";
import Frame from "./Frame";
import Chat from "./Chat";
function Home() {
    return (
        <div className=" lg:ml-24 lg:mr-10 flex flex-row  justify-between  ">
            {/* Contacts */}
            <Contacts />
            {/* Chat */}
            <Chat />
            {/* Frame */}
            <Frame />
        </div>
    )
}

export default Home