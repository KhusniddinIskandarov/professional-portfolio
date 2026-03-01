import { Navbar } from '../components/sections/Navbar'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'

export const MainLayout = () => {
  return `
    <header>
    ${Navbar()}
    </header>
    <main>
    ${HeroSection()}
    ${AboutSection()}
    </main>
    <footer id="footer"></footer>
  `
}
