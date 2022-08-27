import { useState, useEffect } from "react";
import env from "./api/attester/env.json" assert {type: "json"}
import Link from 'next/link'
import Tx from "../components/Tx";



export default function Authority() {

    // the state
    const [txs, setTxs] = useState([])

    // fetcher
    const fetchTx = async () => {
      const base = "https://wilt-attester.vercel.app"
      const res = await fetch(base+"/api/attester/requests")
      const tickets = await res.json()
      setTxs(tickets.tickets)
    }

    // useEffect
    useEffect(() => {
      fetchTx()
    }, [])

    
    

    return <div className="bg-[#1E293B] w-3/5 h-auto
                rounded-xl mx-auto my-20 drop-shadow-xl 
                border border-slate-700">
                
                <div className="">
                    <div>
                      <div className="flex justify-end mr-10 mt-2">
                        <Link href={"/"}>
                          <a className="px-3 py-1 hover:bg-indigo-800 bg-indigo-600 border-indigo-700 rounded text-slate-400">	← Back</a>
                        </Link>
                      </div>

                    </div>
                    <div className="flex justify-center">
                        <p className="text-[#C2E4F0] text-5xl">Wilt Authority </p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-slate-500 text-xl font-light mt-5">Interact with Kilt blockchain to approve or deny requests.</p>
                    </div>
                    {/* --------------------------------------------------------------------- */}
                    
                    <div className="flex justify-center">
                        {
                          txs.map((tx, idx) => <Tx key={idx} data={tx}/>)
                        }
                    </div>
                    <div className="h-[100px]"></div>
                </div>
            </div>
}
