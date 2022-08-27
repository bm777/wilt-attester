

export default function Tx(props) {
    const isData = props.data.type

    if (isData == "TYPE") {
        return (
            <div className="mx-auto mt-3 h-10 grid grid-cols-10 items-center justify-start  gap-5 border border-indigo-700 bg-indigo-600 w-9/12 rounded">
                <div className="ml-3 w-3 h-3 rounded-full  my-auto"></div>
                <p className="col-span-2 text-white">{props.data.type}</p>
                <p className="col-span-3 text-white">{props.data._id}</p>
                <p className="text-white">{props.data.name}</p>
                <p className="text-white">{props.data.age}</p>
                <p className="col-span-2 rounded text-white">Actions</p>
            </div>
        )
        
    }
    
    return (
        <div className="mx-auto mt-3 h-10 grid grid-cols-10 items-center justify-start  gap-5 border border-indigo-700 w-9/12 rounded">
            <div className="ml-3 w-3 h-3 rounded-full bg-teal-600 my-auto"></div>
            <p className="col-span-2 text-white font-light">{props.data.type}</p>
            <p className="col-span-3 text-amber-400 font-light">{props.data._id}</p>
            <p className="text-slate-400 font-light">{props.data.name}</p>
            <p className="text-slate-400 font-light">{props.data.age}</p>
            <button className="bg-indigo-500 rounded text-slate-300 border border-indigo-600
                     hover:border hover:border-indigo-700 hover:text-white hover:bg-teal-800 ">approve</button>
            <button className="bg-transparent rounded text-red-500 border border-red-500
                     hover:border hover:border-red-700 hover:text-slate-300 hover:bg-red-500 ">deny</button>
        </div>
    )
}