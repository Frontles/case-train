import React from 'react'
import Help from './assets/help.svg'
import Settings from './assets/settings.svg'
import Message from './assets/chat 01.svg'
import Notification from './assets/notification 03.svg'
import DataTablex from './DataTablex'
function Table() {
    return (
        <div className=" ml-24 mr-10 flex flex-col pt-4 items-center justify-between">
            {/* header */}
            <div className='w-full flex '>
                <h1 className=' text-PrimaryNavy font-semibold w-full ' style={{ fontSize: "24px" }}>Labaratory Results</h1>


                <div className='flex items-center space-x-5'>
                    <p className='flex items-center justify-center'>
                        <img src={Help} alt="" /> Help
                    </p>
                    <img src={Message} alt="ss" />

                    <img src={Notification} alt="ss" />

                    <img src={Settings} alt="ss" />
                </div>

            </div>


            <DataTablex />

        </div>
    )
}

export default Table