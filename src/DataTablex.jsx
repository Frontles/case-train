import React from 'react'
import { Table, Accordion } from '@mantine/core'
function DataTablex() {
    const elements = [
        { status: "-", result: 81, brim: 'mg/dl', reference: "70-110", prevResult: "70-110", name: 'Glujoz' },
        { status: "-", result: 81, brim: 'mg/dl', reference: "70-110", prevResult: "70-110", name: 'Glujoz' },
        { status: "-", result: 81, brim: 'mg/dl', reference: "70-110", prevResult: "70-110", name: 'Glujoz' },
        { status: "-", result: 81, brim: 'mg/dl', reference: "70-110", prevResult: "70-110", name: 'Glujoz' },
        { status: "-", result: 81, brim: 'mg/dl', reference: "70-110", prevResult: "70-110", name: 'Glujoz' },

    ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td className='!text-PrimaryNavy !font-medium text-center'>{element.name}</td>
            <td className='!text-PrimaryNavy !font-medium text-center'>{element.status}</td>
            <td className='!text-PrimaryNavy !font-medium text-center'>{element.result}</td>
            <td className='!text-PrimaryNavy !font-medium text-center'>{element.brim}</td>
            <td className='!text-PrimaryNavy !font-medium text-center'>{element.reference}</td>
            <td className='!text-PrimaryNavy !font-medium text-center'>{element.prevResult}</td>
        </tr>
    ));
    return (
        <Table verticalSpacing="sm" highlightOnHover className='w-2/3'>
            <thead className='bg-BaseGray '>
                <tr>
                    <th className='!text-PrimaryNavy !font-semibold  !text-center' style={{ fontSize: "18px" }}>Test Name</th>
                    <th className='!text-PrimaryNavy !font-semibold  !text-center' style={{ fontSize: "18px" }}></th>
                    <th className='!text-PrimaryNavy !font-semibold  !text-center' style={{ fontSize: "18px" }}>Result</th>
                    <th className='!text-PrimaryNavy !font-semibold  !text-center' style={{ fontSize: "18px" }}>Brim</th>
                    <th className='!text-PrimaryNavy !font-semibold  !text-center' style={{ fontSize: "18px" }}>Reference</th>
                    <th className='!text-PrimaryNavy !font-semibold  !text-center' style={{ fontSize: "18px" }}>Previous Results</th>

                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>

        </Table>
    );

}

export default DataTablex