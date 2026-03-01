import { Navbar } from '../components/sections/Navbar'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { Footer } from '../components/sections/Footer'

export const MainLayout = () => {
  return `
    <header>
    ${Navbar()}
    </header>
    <main>
    ${HeroSection()}
    ${AboutSection()}
    ${ProjectsSection()}
    ${ContactSection()}
    </main>
    <footer>
    ${Footer()}
    </footer>
  `
}
