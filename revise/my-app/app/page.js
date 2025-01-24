import React from 'react'
// import fs from 'fs/promises';

const page = () => {
  console.log("hey,Its server");
  // let a=fs.readFile("./data.json");
  // a.then(e=>{console.log(e)})
  return (
    
    
    <div className='m-5 border border-red-200 bg-slate-500'>
      <h1 className=' m-5'><span className='border p-3 px-5'>Main page</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae cum animi minus velit quibusdam expedita itaque, quasi architecto saepe rerum beatae modi, sequi eum eaque atque iusto odio perferendis labore unde nulla illum ullam corporis quidem? Veritatis, temporibus. Sit quo veniam enim, placeat perspiciatis sapiente ipsum architecto, autem fuga nulla exercitationem explicabo tenetur ipsa.</p>
    </div>

    
  )
}

export default page
