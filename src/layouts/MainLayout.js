import { Navbar } from '../components/sections/Navbar'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'

export const MainLayout = () => {
  return `
    <header>
    ${Navbar()}
    </header>
    <main>
    ${HeroSection()}
    ${AboutSection()}
    ${ProjectsSection()}
    </main>
    <footer id="footer"></footer>
  `
}
