import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col bg-slate-600 items-center'>
      <h2 className='text-2xl'>Not Found 404</h2>
      <p>Could not find requested resource</p>
      <Link className='text-blue-500 underline' href="/"> Click me for Return Home</Link>
    </div>
  )
}