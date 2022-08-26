import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { useState } from "react";

export default function Content() {
    // router to get the did value
    const router = useRouter()
    const did = router.query.id

    // the state
    const  [qr, setQr] = useState(did || "")
    

    return <div>
                <div>Did: {did}</div>
                {did != "" && (
                    <QRCode value={qr} className="" />
                )}
        
            </div>
}