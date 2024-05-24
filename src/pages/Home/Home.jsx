import React from 'react'
import Hero from '../../components/hero/Hero'
import WhatWeDo from '../../components/whatwedo/WhatWeDo'
import HowWeWork from '../../components/howWeWork/HowWeWork'
import RecentProjects from '../../components/recentProjects/RecentProjects'
import OurTeam from '../../components/ourTeam/OurTeam'
import OurServices from '../../components/ourServices/OurServices'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <section id="Hero">
        <Hero />
      </section>
      <section id="WhatWeDo">
        <WhatWeDo />
      </section>
      <section id="HowWeWork">
        <HowWeWork />
      </section>
      <section id="RecentProjects">
        <RecentProjects />
      </section>
      <section id="OurTeam">
        <OurTeam />
      </section>
      <section id="OurServices">
        <OurServices />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home