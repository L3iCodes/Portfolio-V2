import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2'>
      <div className='flex gap-3'>
        <span className="loading loading-ring loading-xl"></span>
        <h2 className='text-2xl font-bold'>Page Not Found</h2>
        <span className="loading loading-ring loading-xl"></span>
      </div>
      
      
      <p className='text-sm'>Could not find requested resource</p>
      <Link href="/" className='px-3 py-1 border-1 border-base-content/20 rounded-sm text-sm mt-3 hover:bg-base-300'>Return Home</Link>
    </div>
  )
}