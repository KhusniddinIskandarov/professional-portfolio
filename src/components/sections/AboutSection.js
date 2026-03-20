export const AboutSection = () => {
  return `
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        
        <h2 class="text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p class="text-gray-600 leading-relaxed mb-6">
              I specialize in building scalable frontend architectures 
              using modern technologies and professional Git workflows.
            </p>

            <p class="text-gray-600 leading-relaxed">
              My focus is on clean code, maintainable structure and 
              production-level best practices.
            </p>
          </div>

          <div class="flex justify-center">
            <div class="w-64 h-64 bg-blue-200 rounded-xl"></div>
          </div>

        </div>

      </div>
    </section>
  `
}
