import { Button } from '../ui/Button'

export const ContactSection = () => {
  return `
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6 max-w-2xl">
        <h2 class="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form class="flex flex-col gap-6">
          <input type="text" placeholder="Name" class="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Email" class="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <textarea placeholder="Message" rows="6" class="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          ${Button('Send Message')}
        </form>
      </div>
    </section>
  `
}
