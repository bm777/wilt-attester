import { useRouter } from "next/router";

export default function Content() {
    const router = useRouter()
    return <div>Did: {router.query.id}</div>
}