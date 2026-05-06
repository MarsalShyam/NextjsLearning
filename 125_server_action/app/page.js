'use client'
// without making the use clint we can't use the useRef hook or useState

// import Image from "next/image";

import { useRef } from "react";
import { submitAction } from "@/actions/form";
// import fs from 'fs/promises'---this is usable in server side

export default function Home() {

  // const submitAction=async(e)=>{
  //   "use server"  ---IMPORTANT
  //   console.log(e.get("name"), e.get("add"))
  //   let a =await fs.writeFile("ram.txt","I am ram")
      // console.log(a)
  // }

  let ref=useRef();
  return (
    <div>
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black" type="text"/>
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black" type="text"/>
        </div>
        <div>
          <button className=" border-2 border-red-400 bg-green-800">Submit</button>
        </div>
      </form>
    </div>
    
  );
}
