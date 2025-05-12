"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const params = useParams();
  console.log("params", params);
  
  const url = params.url;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <div >
        <h1 className="text-2xl">Dynamic URL</h1>
        <h1 className="text-black bg-white p-1 ">{url}</h1>
      </div>
    </div>
  );
}

