import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import env from "./api/attester/env.json" assert {type: "json"}
import iconMessage from "../public/email.png"
import Image from 'next/image'


export default function Home() {

    // the state
    const [isAttester, setIsattester] = useState(true)
    const [did, setDid] = useState("")
    const [nb, setNb] = useState(0)

    // handlers
    function handleClick() {

      const url = getUrl(!isAttester)
      setDid(url)
      setIsattester(!isAttester)

    }

    // timer
    
    const timer = setInterval(async () => {
      const base = "https://wilt-attester.vercel.app"
      const res = await fetch(base+"/api/attester/requests")
      const tickets = await res.json()
      setNb(tickets.tickets.length)
      console.log("+++")
    }, 1000)

    // useEffect
    useEffect(() => {
      const url = getUrl(isAttester)
      setDid(url)
    }, [])

    
    

    return <div className="bg-[#1E293B] w-3/5 h-auto
                rounded-xl mx-auto my-20 drop-shadow-xl 
                border border-slate-700">
                
                <div className="">
                    <div>
                      <div className="flex justify-end mr-10">
                        <Image src={iconMessage} />
                        <div className="w-7 h-7 bg-indigo-600 rounded-full flex justify-center text-white font-bold text-lg">{nb}</div>
                      </div>

                    </div>
                    <div className="flex justify-center">
                        <p className="text-[#C2E4F0] text-5xl">Wilt Authority -</p> 
                        <p className="text-teal-600 text-5xl ml-2 font-normal">{isAttester? "Attester": "Verifier"}</p></div>
                    <div className="flex justify-center"><p className="text-slate-500 text-xl font-light mt-10">Check-in verication system based on the Kilt protocol.</p></div>
                    <div className="flex justify-center gap-5 mt-10">
                        <button className="bg-indigo-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleClick}>
                            Switch to {!isAttester? "Attester": "Verifier"}
                        </button>
                    </div>
                    <div className="flex justify-center mt-24">
                    {did != "" && (
                        <QRCode value={did} className="" />
                    )}
                    </div>
                    <div className="flex justify-center">
                        <p className="text-teal-500 text-xl font-light mt-12">Scan the QR code to {isAttester? "request": "verify"} your {isAttester? "ticket": "attestation"}.</p>
                    </div>
                    <div className="h-[100px]"></div>
                </div>
            </div>
}

function getUrl(isAttester){
  const base_url = "https://wilt-attester.vercel.app"
  var url
  if (isAttester){
    url = base_url+ "/api/attester/"+ env.ATTESTER_DID_URI
  }
  else{
    url = base_url+ "/api/verifier/"+ env.ATTESTER_DID_URI
  }
  return url
}