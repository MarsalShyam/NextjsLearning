'use client'
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "shyam",
      role: "Software Engineer"
    }
    //Post request using fetch
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data),
    });

    let res = await a.json();
    console.log(res);
  }
  //When User Click, handleClick2()-Run inside browser
  const handleClick2 = async () => {

    // just- step2- Data Object Created
    let data = {
      name: "Ganesh",
      role: "Player"
    }//This data currently exists only in frontend memory.

    // STEP 3 — fetch() Sends HTTP Request
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })//Now Browser create an HTTP request

    // STEP 8 — Frontend Receives Response

    let res = await a.json();
    //response comes as JSON strin
    // so .json() converts into JS object
    console.log(res);
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick}>Click me</button>
      {/* STEP 1 — User Clicks Button */}
      <button onClick={handleClick2}>Click me again</button>
    </div>
  );
}
