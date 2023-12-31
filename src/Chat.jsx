import React from 'react'
import Profile2 from "./assets/profile_2.jpeg";
import Profile from "./assets/profile.jpeg";
import MessageImage1 from "./assets/message image 1.png";
import MessageImage2 from "./assets/message image 2.png";
import SendFast from "./assets/send fast.svg";
import OnlineIcon from './assets/online icon.svg'

function Chat() {
    return (
        <div className="flex flex-col w-full py-4 h-screen  justify-between ">

            <div className=' border-l border-r border-BG2 flex h-full flex-col grow shrink overflow-y-auto '>
                {/* Chat Message Header */}
                <div className=' px-2 pb-6 mb-4  w-full  border-b  bg-white flex items-center '>
                    <div className="px-3 relative">
                        <img src={Profile2} alt="profil" className="rounded-full object-cover w-[47px] ml-2 " />
                        <img src={OnlineIcon} alt='' className='absolute right-3.5 bottom-0 -rotate-45' />
                    </div>
                    <div className=" flex flex-col ">
                        <p className="text-Text2 font-medium">Bogdan Krivenchenko</p>
                        <p style={{ color: "#B0B7C3", fontSize: "12px" }}>Typing...</p>
                    </div>
                </div>

                {/* Chat Message Content */}

                <div className="pt-8 flex flex-col gap-y-1 overflow-y-auto shrink grow px-4">
                    <p style={{ color: "#B0B7C3", fontSize: "12px" }} className=" pb-10 text-center">08:30, Today</p>
                    <div className="flex items-start justify-start ">
                        <img src={Profile2} alt="profil" className="rounded-full object-cover w-[47px] " />
                        <div className="flex flex-col px-4">
                            <p style={{ color: "#28303F", backgroundColor: "#0028551A", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi,How are things with our illustration builder?

                            </p>
                            <p style={{ color: "#78828A", fontSize: "12px" }}>08::30</p>
                        </div>
                    </div>



                    <div className="flex items-start justify-start">
                        <div className=" ml-12"></div>
                        <div className="flex flex-col px-4">
                            <p style={{ color: "#28303F", backgroundColor: "#0028551A", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">I found out that Lesya has completed her part of the work and is waiting for your review.</p>
                            <p style={{ color: "#78828A", fontSize: "12px" }}>08:30</p>
                        </div>
                    </div>



                    <div className="flex items-start start">
                        <div className=" ml-12"></div>
                        <div className="flex px-4 flex-col">
                            <p className="rounded-xl relative flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-nowrap ">
                                <img src={MessageImage1} alt="resim1" className=" w-full h-full object-cover rounded-2xl" />
                                <img src={MessageImage2} alt="resim2" className=" w-full h-full object-cover  rounded-2xl" />
                            </p>

                            <p style={{ color: "#78828A", fontSize: "12px" }}>08:31</p>
                        </div>
                    </div>



                    <div className="flex  flex-row-reverse items-start justify-start ">
                        <img src={Profile} alt="profil" className="rounded-full object-cover w-[47px]  " />
                        <div className="flex flex-col px-4 items-end">
                            <p style={{ color: "#28303F", backgroundColor: "#ECFCF9", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi I'm working on the final scenes and will show you the result in the next few days.</p>
                            <p className="" style={{ color: "#78828A", fontSize: "12px" }}>08:33</p>
                        </div>
                    </div>
                    <div className="flex  flex-row-reverse items-start justify-start ">
                        <img src={Profile} alt="profil" className="rounded-full object-cover w-[47px]  " />
                        <div className="flex flex-col px-4 items-end">
                            <p style={{ color: "#28303F", backgroundColor: "#ECFCF9", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi I'm working on the final scenes and will show you the result in the next few days.</p>
                            <p className="" style={{ color: "#78828A", fontSize: "12px" }}>08:33</p>
                        </div>
                    </div>
                    <div className="flex  flex-row-reverse items-start justify-start ">
                        <img src={Profile} alt="profil" className="rounded-full object-cover w-[47px]  " />
                        <div className="flex flex-col px-4 items-end">
                            <p style={{ color: "#28303F", backgroundColor: "#ECFCF9", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi I'm working on the final scenes and will show you the result in the next few days.</p>
                            <p className="" style={{ color: "#78828A", fontSize: "12px" }}>08:33</p>
                        </div>
                    </div>
                    <div className="flex  flex-row-reverse items-start justify-start ">
                        <img src={Profile} alt="profil" className="rounded-full object-cover w-[47px]  " />
                        <div className="flex flex-col px-4 items-end">
                            <p style={{ color: "#28303F", backgroundColor: "#ECFCF9", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi I'm working on the final scenes and will show you the result in the next few days.</p>
                            <p className="" style={{ color: "#78828A", fontSize: "12px" }}>08:33</p>
                        </div>
                    </div>
                    <div className="flex  flex-row-reverse items-start justify-start ">
                        <img src={Profile} alt="profil" className="rounded-full object-cover w-[47px]  " />
                        <div className="flex flex-col px-4 items-end">
                            <p style={{ color: "#28303F", backgroundColor: "#ECFCF9", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi I'm working on the final scenes and will show you the result in the next few days.</p>
                            <p className="" style={{ color: "#78828A", fontSize: "12px" }}>08:33</p>
                        </div>
                    </div>
                    <div className="flex  flex-row-reverse items-start justify-start ">
                        <img src={Profile} alt="profil" className="rounded-full object-cover w-[47px]  " />
                        <div className="flex flex-col px-4 items-end">
                            <p style={{ color: "#28303F", backgroundColor: "#ECFCF9", fontSize: "14px", fontWeight: "500" }} className=" px-3 py-2 rounded-xl max-w-[410px]">Hi I'm working on the final scenes and will show you the result in the next few days.</p>
                            <p className="" style={{ color: "#78828A", fontSize: "12px" }}>08:33</p>
                        </div>
                    </div>



                </div>
            </div>



            {/* Chat Message write */}
            <div className=' py-4 px-5 w-full relative rounded-2xl  bg-BG3 flex flex-none items-center justify-between '>
                <img src={Profile} alt="profil" className="rounded-full object-cover w-[41px] " />
                <input autoComplete='off' name="ara" placeholder='Write your message...' className=' border-none text-StateGray  bg-transparent w-full h-full py-4  focus:outline-none ml-2' />
                <div className=' p-4 bg-PrimaryNavy flex items-center justify-center rounded-full'>
                    <img src={SendFast} alt="send Icon" />
                </div>


            </div>


        </div>
    )
}

export default Chat