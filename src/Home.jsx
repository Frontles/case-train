import React from 'react'
import Contacts from "./Contacts";
import Frame from "./Frame";
import Chat from "./Chat";
function Home() {
    return (
        <div className=" ml-24 mr-10 flex flex-row  justify-between  ">
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