import React from 'react'
import Profile4 from "./assets/profile_4.png"


function Frame() {
    return (
        <div className="flex flex-col basis-1/5 w-auto ml-20 py-4  " >
            <img src={Profile4} className=" pt-6 rounded-2xl object-cover object-center" alt="person" />
            <div className="flex flex-col">
                <div className="flex flex-col pt-4 w-72 ">
                    <p className="text-PrimaryNavy font-semibold" style={{ fontSize: "18px" }}>Jane Kuliyeva F/25 </p>
                    <p className="text-StateGray" style={{ fontSize: "16px", fontWeight: "500" }}>Last appointment: 12.01.2023</p>
                    <p className="text-StateGray" style={{ fontSize: "16px", fontWeight: "500" }}>Next appointment: 12.05.2023 </p>
                </div>

                <div className="flex flex-col pt-4 w-72 ">
                    <p className="text-PrimaryNavy font-medium">Diagnoses</p>
                    <p className="text-StateGray border-b py-3 flex space-x-2" style={{ fontSize: "16px", fontWeight: "500" }} >
                        <span>A00.1</span><span>Kolera, Vibrio cholerae 01, biovar eltor’a bağlı</span>
                    </p>
                    <p className="text-StateGray py-3 flex space-x-2" style={{ fontSize: "16px", fontWeight: "500" }} >
                        <span>A00.1</span><span>Kolera, Vibrio cholerae 01, biovar eltor’a bağlı</span>
                    </p>
                </div>

                <div className="flex flex-col pt-4 w-72 ">
                    <p className="text-PrimaryNavy font-medium">Prescription</p>
                    <p className="text-StateGray border-b py-3 flex space-x-2" style={{ fontSize: "16px", fontWeight: "500" }} >
                        <span>20.05.2023</span><span>PR43645</span>
                    </p>
                    <p className="text-StateGray py-3 flex space-x-2" style={{ fontSize: "16px", fontWeight: "500" }} >

                        <span>20.05.2023</span><span>PR43645</span>
                    </p>
                </div>
                <div className="flex flex-col pt-4 w-72 ">
                    <p className="text-PrimaryNavy font-medium">Orders</p>
                    <p className="text-StateGray border-b py-3 flex space-x-2" style={{ fontSize: "16px", fontWeight: "500" }} >
                        <span>20.05.2023</span><span>PR43645</span>
                    </p>
                    <p className="text-StateGray py-3 flex space-x-2" style={{ fontSize: "16px", fontWeight: "500", }} >

                        <span>20.05.2023</span><span>PR43645</span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Frame