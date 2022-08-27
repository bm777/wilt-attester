

export default function Tx(props) {


    return (

        <div className="mx-auto mt-3 h-10 grid grid-cols-10 items-center justify-start  gap-5 border border-indigo-700 w-9/12 rounded">
            <div className="ml-3 w-3 h-3 rounded-full bg-teal-600 my-auto"></div>
            <p className="col-span-2 text-white">{props.data.type}</p>
            <p className="col-span-3 text-amber-400">{props.data._id}</p>
            <p className="text-slate-400">{props.data.name}</p>
            <p className="text-slate-400">{props.data.age}</p>
            <button className="bg-indigo-700 rounded text-slate-300">approve</button>
            <button className="bg-red-500 rounded text-slate-300">deny</button>
        </div>
    )
}