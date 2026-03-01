import { Navbar } from '../components/sections/Navbar'

export const MainLayout = () => {
  return `
    <header>
    ${Navbar()}
    </header>
    <main id="main"></main>
    <footer id="footer"></footer>
  `
}
