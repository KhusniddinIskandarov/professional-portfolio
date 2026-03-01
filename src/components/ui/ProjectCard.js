export const ProjectCard = ({ title, description, link }) => {
  return `
    <div class="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
      <h3 class="text-2xl font-semibold mb-2">${title}</h3>
      <p class="text-gray-600 mb-4">${description}</p>
      <a href="${link}" class="text-blue-600 font-medium hover:underline">View Project</a>
    </div>
  `
}
