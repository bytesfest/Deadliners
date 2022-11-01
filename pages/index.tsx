import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header'
import Navigation from '../src/components/Navigation'
import Services from '../src/components/Services'
import Interupt from '../src/components/Interupt'
import About from '../src/components/About'
import LearnMore from '../src/components/LearnMore'
import News from '../src/components/News'
import ContactUs from '../src/components/ContactUs'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Mi Sides</title>
        <link rel="icon" href="/logoLight.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Send+Flowers&display=swap" rel="stylesheet"/>
      </Head>

      <div>
        <Navigation/>
        <Header/>
        <About/>
        <Interupt/>
        <Services/>
        <LearnMore/>
        <News/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
