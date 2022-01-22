import Head from 'next/head'
import Image from 'next/image'

import notPineapplePizza from '../public/notpineapplepizza.png'

export default function NotLegal(){
    return(
        <div className="w-screen h-screen bg-purple-400 flex flex-col justify-center items-center">
        <Head>
          <title>Not legal for Italy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className='mb-6 text-4xl text-white font-bold'>We are sorry, Pineapple Pizza is not legal in Italy</h1>
        <Image src={notPineapplePizza} width={250} height={250} className='rounded-lg' />
      </div>
    )
}