import { ProjectCard } from '../ui/ProjectCard'

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Vite & Tailwind',
      link: '#'
    },
    {
      title: 'Todo App',
      description: 'Vanilla JS Todo app with local storage',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'JS weather app consuming API',
      link: '#'
    }
  ]

  return `
    <section id="projects" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projects.map((p) => ProjectCard(p)).join('')}
        </div>
      </div>
    </section>
  `
}
