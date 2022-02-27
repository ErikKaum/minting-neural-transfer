import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-screen w-screen'>

      <Head>
        <title>Mint Neural Transfer</title>
        <meta name="A web3 app (dapp) to mint your favourite picture with neural transfer as an NFT" content="A web3 app (dapp) to mint your pic." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* HEADER */}
        <div className='flex h-20 w-screen items-center justify-center border border-black'>
          <h1 className='font-bold text-4xl'>
            Mint your neural transfer picture
          </h1>
        </div>

      </main>

      <footer>
      </footer>
    </div>
  )
}
