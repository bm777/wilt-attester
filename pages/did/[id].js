import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { useState } from "react";

export default function Content() {
    // router to get the did value
    const router = useRouter()
    const url = router.query.id

    // the state
    const [isAttester, setIsttester] = useState(true)
    const [did, setDid] = useState("")

    // handlers
    const handleClick = (e) => {
        if (isAttester) setIsttester(false)
        else setIsttester(true)
    }
    console.log(router.query.id)
    

    return <div className="bg-[#1E293B] w-3/5 h-auto
                rounded-xl mx-auto my-20 drop-shadow-xl 
                border border-slate-700">
                <div className="">
                    <div className="flex justify-center">
                        <p className="text-[#C2E4F0] text-5xl mt-6">Wilt Authority -</p> 
                        <p className="text-teal-600 text-5xl mt-6 ml-2 font-normal">{isAttester? "Attester": "Verifier"}</p></div>
                    <div className="flex justify-center"><p className="text-slate-500 text-xl font-light mt-10">Check-in verication system based on the Kilt protocol.</p></div>
                    <div className="flex justify-center gap-5 mt-10">
                        <button className="bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleClick}>
                            Switch to {!isAttester? "Attester": "Verifier"}
                        </button>
                    </div>
                    <div className="flex justify-center mt-24">
                    {router.query.id != "" && (
                        <QRCode value={url} className="" />
                    )}
                    </div>
                    <div className="flex justify-center">
                        <p className="text-teal-500 text-xl font-light mt-12">Scan the QR code to {isAttester? "request": "verify"} your {isAttester? "ticket": "attestation"}.</p>
                    </div>
                    <div className="h-[100px]"></div>
                </div>
            </div>
}