import { Button } from '../ui/Button'

export const HeroSection = () => {
  return `
    <section id="home" class="min-h-screen flex items-center">
      <div class="container mx-auto px-6">
        <h1 class="text-5xl font-bold leading-tight mb-6">
          Hi, I'm a Professional Frontend Developer
        </h1>
        <p class="text-lg text-gray-600 mb-8 max-w-xl">
          I build scalable, maintainable and production-ready web applications 
          using modern frontend technologies.
        </p>
        ${Button('View My Projects')}
      </div>
    </section>
  `
}
