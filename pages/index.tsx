import Head from 'next/head';
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title> Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <Header/>
      </Head>
 
   
    </div>
  )
}
