import React from 'react'
import { ReactComponent as HomeIcon } from "./assets/Integro Home icon.svg"
import { ReactComponent as SmileIcon } from "./assets/smile face.svg"
import { ReactComponent as CalendarTick } from "./assets/calendar-tick.svg"
import { ReactComponent as Calendar } from "./assets/calendar.svg"
import { ReactComponent as MessageText } from "./assets/message-text.svg"
import { ReactComponent as Diagnoses } from "./assets/Diagnoses.svg"
import { ReactComponent as Prescription } from "./assets/Prescription.svg"
import { ReactComponent as TestRules } from "./assets/Test Rules.svg"
import { ReactComponent as MedicalReports } from "./assets/medical reports.svg"
import { ReactComponent as WalletCoins } from "./assets/wallet coins.svg"
import { ReactComponent as User } from "./assets/user.svg"
import Profile from "./assets/profile.jpeg"
import { Link } from 'react-router-dom'

function LeftSideBar() {
    return (
        <div id="leftsidebar" className="flex fixed flex-col items-center justify-center px-5">
            <div id="logo" className="flex mt-3">
                <div style={{ backgroundColor: "#FF6739" }} className=" w-2 h-2 mx-1 rounded-full"></div>
                <div style={{ backgroundColor: "#009ECC" }} className=" w-2 h-2 mx-1 rounded-full"></div>
                <div style={{ backgroundColor: "#3CDBC0" }} className=" w-2 h-2 mx-1 rounded-full"></div>
            </div>
            <div className=" mt-20 space-y-[42px]">
                <Link to="/"><HomeIcon className="cursor-pointer" /></Link>
                <SmileIcon className="cursor-pointer" />
                <CalendarTick className="cursor-pointer" />
                <Calendar className="cursor-pointer" />
                <MessageText className="cursor-pointer" />
                <Diagnoses className="cursor-pointer" />
                <Prescription className="cursor-pointer" />
                <TestRules className="cursor-pointer" />
                <MedicalReports className="cursor-pointer" />
                <WalletCoins className="cursor-pointer" />
                <User className="cursor-pointer" />

            </div>
            <div className=" mt-[58px]">
                <Link to="/table" className='bg-red-500 px-2 py-1 text-white rounded-full text-sm'> table
                </Link>
                <img src={Profile} width={"41px"} className="rounded-full mt-[56px]" alt="profile" />

            </div>
        </div>
    )
}

export default LeftSideBar