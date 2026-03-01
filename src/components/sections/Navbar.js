export const Navbar = () => {
  return `
    <nav class="container mx-auto flex justify-between items-center py-4">
      <h1 class="text-2xl font-bold">Portfolio</h1>
      <ul class="flex gap-6">
        <li><a href="#home" class="hover:text-blue-500">Home</a></li>
        <li><a href="#about" class="hover:text-blue-500">About</a></li>
        <li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  `
}
