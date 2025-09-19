import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="projects" className="min-h-screen">
        {/* Project content will go here */}
      </section>
      <section id="expertise" className="min-h-screen">
        {/* Expertise content will go here */}
      </section>
      <section id="about" className="min-h-screen">
        {/* About content will go here */}
      </section>
      <section id="contact" className="min-h-screen">
        {/* Contact content will go here */}
      </section>
    </>
  );
}
