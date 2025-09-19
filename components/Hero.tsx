import { Button } from './Button';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold md:text-6xl">
          Je transforme la data en <span className="text-primary">solutions intelligentes</span>.
        </h1>
        <p className="text-lg md:text-xl text-text/80">
          Data Scientist & Développeur Full-Stack spécialisé en ML et IA.
        </p>
        <div className="flex justify-center space-x-4">
          <Button href="#projects" size="lg">
            Voir mes projets
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
