"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [data, setData] = useState("")
  const [param, setParam] = useState("");
  function handleClick() {
    if(url){
      router.push(`dynamicUrl/${url}`);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      {console.log(data)}
      <div>
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button
          className="bg-white text-black p-2 rounded-xl m-2"
          onClick={handleClick}
        >
          push to client
        </button>

        <button
          className="bg-white text-black p-2 rounded-xl m-2"
          onClick={()=> {router.push(`dynamicUrlSSR/${url}`)}}
        >
          push to SSR
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }
          }
        />
        <input
          type="text"
          placeholder="search param"
          value={param}
          onChange={(e) => {
            setParam(e.target.value);
          }
          }
        />
        <button
          className="bg-white text-black p-2 rounded-xl m-2"  
          onClick={async() => {
            const res = await fetch(`http://localhost:3000/api/dynamicUrl/${url}?param=${param}`);
            const data = await res.json();
            setData(data.message);
          }}
        >
          get API
        </button>
      <div>
        {data && <div className="text-2xl">Data from API:</div>}
        {data}
      </div>
    </div>
    </div>
  );
}

