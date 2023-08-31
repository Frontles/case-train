import React from 'react'
import Help from './assets/help.svg'
import Settings from './assets/settings.svg'
import Message from './assets/chat 01.svg'
import Notification from './assets/notification 03.svg'
import NestedTable from './NestedTable'
import { DataTable } from 'mantine-datatable';
import { transparent } from 'tailwindcss/colors'



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
            {/*
            
            <div className='flex flex-col  w-3/4 border px-6 py-9 border-StrokeColor rounded-xl justify-between'>
                <p className='text-InputGray font-semibold font-sm flex justify-between w-full'>
                    <span>Name Surname</span> <span>Age</span> <span>Protocol No:</span>  <span>ICD-10 Code</span> <span>Diagnoses</span> <span>Date</span>
                </p>
                <p className='text-PrimaryNavy font-semibold  flex justify-between w-full'>
                    <span>Atabay Kuliyev</span> <span>22</span> <span>IL7543677S</span>  <span>A000.1</span> <span>Kolera, Vibrio cholerae 01, biovar eltor’a bağlı</span> <span>20.05.2023</span>
                </p>

            </div>
            */}
            <DataTable className='!border !border-StrokeColor rounded-xl p-4 w-full my-5 '
                borderColor={transparent}

                rowClassName={"!text-PrimaryNavy   "}
                rowStyle={{ fontWeight: '500', }}


                columns={[
                    {
                        accessor: 'name',
                        title: 'Name Surname ',


                    },
                    {
                        accessor: 'age', title: 'Age', textAlignment: 'start',
                    },
                    {
                        accessor: 'ProtocolNo', title: 'Protocol No:', textAlignment: 'start',
                    },
                    {
                        accessor: 'ICDCode', title: 'ICD-10 Code', textAlignment: 'start',
                    },
                    {
                        accessor: 'Diagnosis', title: 'Diagnoses', textAlignment: 'start',
                    },
                    {
                        accessor: 'Date', title: 'Date', textAlignment: 'start',
                    },


                ]}

                records={[
                    { name: "Atabay Kuliyev", age: "22", ProtocolNo: "IL7543677S", ICDCode: "A000.1", Diagnosis: "Kolera, Vibrio cholerae 01, biovar eltor’a bağlı", Date: "20.05.2023" }
                ]}

            />

            <NestedTable />



        </div>
    )
}

export default Table