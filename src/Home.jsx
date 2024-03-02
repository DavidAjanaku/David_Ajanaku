import React from 'react'
import Header from './Header'
import HeroSection from './Components/HeroSection'
import AboutMe from './Components/AboutMe'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Hamburger from './Components/Hamburger'
import Articles from './Components/Article'

export default function Home() {
  return (
    <div className='bg-slate-100'>
       <div className='bg-slate-300'>
      <div>
      <Header/>
      <Hamburger/>
      </div>
       </div>
       <section className='pt-56 bg-slate-100'>
       <HeroSection/>
       <AboutMe/>
     

       <Portfolio/>
       <Articles/>
       </section>
       <Footer/>
    </div>
  )
}
