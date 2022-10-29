import Head from 'next/head'
import MainSection from '../components/MainSection'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Huy Le | Porfolio 2022</title>
        <meta name="description" content="Huy Le | Porfolio 2022" />
      </Head>
      <div>
        <Sidebar />
        <MainSection />
      </div>
    </div>
  )
}
