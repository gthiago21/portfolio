import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import { LanguageContext, useLanguageState } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'
import { SkipLink } from '@/components/layout/SkipLink'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

function App() {
  const languageState = useLanguageState()
  const { theme, toggleTheme } = useTheme()
  return (
    <LanguageContext.Provider value={languageState}>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <SkipLink />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main id="main-content">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </LazyMotion>
      </MotionConfig>
    </LanguageContext.Provider>
  )
}

export default App
