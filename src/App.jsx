import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './app.scss'
import '../src/assets/fonts/fonts.scss'
import NavbarComponent from "./components/navbar/NavbarComponent"
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'
import Services from './pages/services/Services'
import Benefits from './pages/benefits/Benefits'
import Portfolio from './pages/portfolio/Portfolio'
import Testimonials from './pages/testimonials/Testimonials'
import OurTeam from './pages/ourteam/OurTeam'
import Contact from './pages/contact/Contact'
import SingleService from './pages/singleService/SingleService';
import Cursor from './components/cursor/Cursor'

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
