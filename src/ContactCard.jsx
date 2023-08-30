import React from 'react'
import OnlineIcon from './assets/online icon.svg'

function ContactCard(props) {
    return (

        props.active ?
            <div className=" bg-CheckedPeople relative flex rounded-2xl space-x-6 w-full px-2 py-4 items center ">
                <div className="basis-1/6 relative">
                    <img src={props.photo} alt="profil" className="rounded-full object-cover w-[47px] ml-2 " />
                    <img src={OnlineIcon} alt='' className='absolute right-2.5 bottom-0 ' />

                </div>
                <div className="basis-4/6 flex flex-col ">
                    <p className="text-StateGray font-medium">{props.name}</p>
                    <p style={{ color: "#B0B7C3", fontSize: "12px" }} className='flex items-center'>{props.message}   </p>
                </div>
                <div className="basis-1/6 absolute right-[14px] top-[15px] flex items-start justify-end">
                    <p style={{ color: "#B0B7C3", fontSize: "12px" }}>{props.date}</p>
                </div>


            </div> :
            <div className=" bg-white relative flex rounded-2xl space-x-6 w-full px-2 py-4 items center ">
                <div className="basis-1/6">
                    <img src={props.photo} alt="profil" className="rounded-full object-cover w-[47px] ml-2 " />
                </div>
                <div className="basis-4/6 flex flex-col ">
                    <p className="text-StateGray font-medium">{props.name}</p>
                    <p style={{ color: "#B0B7C3", fontSize: "12px" }} className='flex items-center'>{props.message} <span className='absolute bg-WarningColor text-white right-5 px-2 py-0.5 rounded-full'>1</span>  </p>

                </div>
                <div className="basis-1/6 absolute right-[14px] top-[15px] flex items-start justify-end">
                    <p style={{ color: "#B0B7C3", fontSize: "12px" }}>{props.date}</p>
                </div>


            </div>

    )
}

export default ContactCard