import React from 'react'
import { ReactComponent as SearchIcon } from "./assets/search icon.svg";
import ContactCard from "./ContactCard";
import Profile from "./assets/profile_2.jpeg";
import Profile2 from "./assets/Lesya.png";

function Contacts() {
    return (
        <div className="flex flex-col basis-2/6 mx-5 ">

            <div className='p-7 h-10 w-full  relative border rounded-2xl mb-4 bg-white flex text-StateGray items-center justify-between '>
                <SearchIcon />
                <input name="ara" autoComplete='off' placeholder='Search from chat' className=' border-none   bg-transparent w-full h-full py-4  focus:outline-none ml-2' />


            </div>
            <div className=' w-full  bg-white flex flex-col items-center justify-center '>
                <ContactCard active={true} photo={Profile} name="Bogdan Krivenchenko" message="Hi! How are things with the ill..." date="08:30" />
                <ContactCard photo={Profile2} name="Lesya Borodina" message="Are you in the office yet?" date="08:15" />
                <ContactCard photo={Profile2} name="Lesya Borodina" message="Are you in the office yet ?" date="08:15" />
                <ContactCard photo={Profile2} name="Lesya Borodina" message="Are you in the office yet ?" date="08:15" />
                <ContactCard photo={Profile2} name="Lesya Borodina" message="Are you in the office yet ?" date="08:15" />





            </div>

        </div>
    )
}

export default Contacts