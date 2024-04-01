import Header from './header'
import Hero from './hero'
import Features from './features'
import Work from './work'
import Search from './search'
import Footer from './footer'
import Trial from './trial'

// CSS
import './assets/css/animate.min.css'
import './assets/css/slick.css'
import './assets/css/tailwind-built.css'

export default function PageHome() {
    return (
        <>
            <Header />
            <section className="main">
                <Hero />
                <Search />
                <Features />
                <Work />
                <Trial />
            </section>
            <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: '2147483647' }}>
            <svg alt="" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg ">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            </a>
            <Footer />
        </>
    )
}
