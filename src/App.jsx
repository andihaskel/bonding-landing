import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../src/assets/fonts/fonts.scss'
import './app.scss'
import Footer from './components/footer/Footer'
import NavbarComponent from "./components/navbar/NavbarComponent"
import Benefits from './pages/benefits/Benefits'
import Contact from './pages/contact/Contact'
import Home from './pages/Home/Home'
import OurTeam from './pages/ourteam/OurTeam'
import Portfolio from './pages/portfolio/Portfolio'
import Services from './pages/services/Services'
import SingleService from './pages/singleService/SingleService'
import Testimonials from './pages/testimonials/Testimonials'

function App() {
  return (
    <>
      <Router>
        {/* <Cursor /> */}
        <NavbarComponent />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/benefits" element={<Benefits />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/ourteam" element={<OurTeam />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<SingleService />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
