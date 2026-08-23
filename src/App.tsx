import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Location from './components/Location'
import ContactUs from './components/ContactUs'
import ClosingSection from './components/ClosingSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>AMALY COMMUNITY | صالون تجميل وكافيه في دمشق</title>
        <meta
          name="description"
          content="AMALY COMMUNITY - صالون تجميل راقي مع كافيه هادئ ومميز في دمشق، سيدي مقداد. تسريحات، مكياج، عناية بالبشرة والأظافر. جمالك يستحق مكانك."
        />
        <meta name="keywords" content="صالون تجميل دمشق, كافيه دمشق, مكياج, تسريحات, عناية بالبشرة, AMALY COMMUNITY" />
        <meta property="og:title" content="AMALY COMMUNITY | Café & Beauty Lounge" />
        <meta
          property="og:description"
          content="صالون تجميل راقي مع كافيه هادئ ومميز — جمالك يستحق مكانك"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
        <html lang="ar" dir="rtl" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <Location />
        <ContactUs />
        <ClosingSection />
      </main>
      <Footer />
    </>
  )
}

export default App
