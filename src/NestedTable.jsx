import React from 'react'

import { DataTable } from 'mantine-datatable';

const companies = [
    {
        id: 1,
        testname: "Biochemistry"
    },
    {
        id: 2,
        testname: "Haematology"
    },
    {
        id: 3,
        testname: "Hormon"
    },


]
const departments = [
    {
        id: 1,
        name: "Glujoz",
        status: "-",
        result: "81",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 1
    },
    {
        id: 2,
        name: "Glujoz",
        status: "-",
        result: "81",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 1
    },
    {
        id: 3,
        name: "Glujoz",
        status: "-",
        result: "65",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 1
    },
    {
        id: 4,
        name: "Glujoz",
        status: "-",
        result: "81",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 1
    },
    {
        id: 5,
        name: "Glujoz",
        status: "-",
        result: "81",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 2
    }, {
        id: 6,
        name: "Glujoz",
        status: "-",
        result: "81",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 2
    },
    {
        id: 7,
        name: "Glujoz",
        status: "-",
        result: 81,
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 3
    },
    {
        id: 8,
        name: "Glujoz",
        status: "-",
        result: 81,
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 3
    },
    {
        id: 9,
        name: "Glujoz",
        status: "-",
        result: "112",
        brim: "mg/dl",
        reference: "70-110",
        previousresult: "70-110",
        company: 3
    },


]


function NestedTable() {




    return (
        <DataTable
            className='w-full border-none '
            withBorder
            rowClassName={"!bg-PrimaryNavy !bg-opacity-10 !text-PrimaryNavy "}
            rowStyle={{ fontWeight: 600 }}
            highlightOnHover


            columns={[

                {
                    accessor: 'testname',
                    title: 'Test Name ',
                    width: 200,
                    titleClassName: "!bg-BaseGray !font-semibold", titleStyle: { fontSize: "18px" }

                },
                {
                    accessor: 'status', title: 'stat', textAlignment: 'center', width: 200, titleClassName: "!bg-BaseGray !font-semibold", titleStyle: { fontSize: "18px" }
                },
                {
                    accessor: 'result', title: 'Result', textAlignment: 'center', width: 200, titleClassName: "!bg-BaseGray !font-semibold", titleStyle: { fontSize: "18px" }
                },
                {
                    accessor: 'brim', title: 'Brim', textAlignment: 'center', width: 200, titleClassName: "!bg-BaseGray !font-semibold", titleStyle: { fontSize: "18px" }
                },
                {
                    accessor: 'reference', title: 'Reference', textAlignment: 'center', width: 200, titleClassName: "!bg-BaseGray !font-semibold", titleStyle: { fontSize: "18px" }
                },
                {
                    accessor: 'previousresult', title: 'Previous Result', textAlignment: 'center', width: 200, titleClassName: "!bg-BaseGray !font-semibold", titleStyle: { fontSize: "18px" }
                },
            ]}
            records={companies}
            rowExpansion={{
                allowMultiple: true,

                content: (company) => {
                    const kayitlar = departments.filter((department) => (department.company === company.record.id))
                    return <DataTable
                        className='w-full'
                        noHeader
                        highlightOnHover
                        rowClassName={({ result }) => (result <= 110 && result >= 70 ? "text-PrimaryNavy font-medium" : "text-PrimaryNavy font-medium !bg-WarningColor !bg-opacity-30")}



                        columns={[
                            {
                                accessor: 'name',
                                title: 'Test Name ',
                                width: 200

                            },
                            {
                                accessor: 'status', title: 'status', textAlignment: 'center', width: 200
                            },
                            {
                                accessor: 'result', title: 'Result', textAlignment: 'center', width: 200
                            },
                            {
                                accessor: 'brim', title: 'Brim', textAlignment: 'center', width: 200
                            },
                            {
                                accessor: 'reference', title: 'Reference', textAlignment: 'center', width: 200
                            },
                            {
                                accessor: 'previousresult', title: 'Previous Result', textAlignment: 'center', width: 200
                            },


                        ]}

                        records={kayitlar}

                    />
                },
            }}

        />
    );
}

export default NestedTable