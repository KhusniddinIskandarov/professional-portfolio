import { Navbar } from '../components/sections/Navbar'
import { HeroSection } from '../components/sections/HeroSection'

export const MainLayout = () => {
  return `
    <header>
    ${Navbar()}
    </header>
    <main>
    ${HeroSection()}
    </main>
    <footer id="footer"></footer>
  `
}
