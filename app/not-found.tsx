import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center flex-col space-y-3 h-screen w-full bg-primary'>
        <h1 className='text-3xl text-white'>Halaman Tidak Ditemukan</h1>
        <Link href="/" className='text-xl underline'>Kembali Ke Home</Link>
    </div>
  )
}

export default NotFound