import Head from 'next/head'
import Image from 'next/image'

import pineapplePizza from '../public/pineapplepizza.png'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-purple-400 flex flex-col justify-center items-center">
      <Head>
        <title>Pineapple Pizza | Not for Italy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mb-6 text-4xl text-white font-bold'>Yummy Pineapple Pizzaaaaa</h1>
      <Image src={pineapplePizza} width={250} height={250} className='rounded-lg' />
      <button className='px-6 py-2 mt-6 bg-purple-700 text-white rounded-xl shadow-md'
        onClick={() => alert(`We will deliver in ${Math.random()} seconds`)}
      >Order Now!</button>
    </div>
  )
}
