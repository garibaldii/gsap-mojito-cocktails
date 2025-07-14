import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import Navbar from './components/navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            {/*div temporária para simular scroll dentro da página para podermos testar o scrolltrigger do gsap. */}
            {/* <div className='h-dvh bg-black'/> */}
            <Cocktails />
        </main>
    )
}

export default App