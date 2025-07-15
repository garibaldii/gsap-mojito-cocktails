import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import Navbar from './components/navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            {/*div temporária para simular scroll dentro da página para podermos testar o scrolltrigger do gsap. */}
            {/* <div className='h-dvh bg-black'/> */}
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    )
}

export default App