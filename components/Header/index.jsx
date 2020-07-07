import React from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <>
      <div className='bg-gray-300 p-6 shadow-md'>
        <h1 className='mx-auto text-center font-bold'>
          <Link href='/'>
            <a>PalpiteBox</a>
          </Link>
        </h1>
      </div>
      <div className='bg-gray-400 p-4 shadow-md text-center' >
        <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </>
  )
}

export default Header