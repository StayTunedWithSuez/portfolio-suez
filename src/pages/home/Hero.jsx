import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative overflow-hidden h-auto">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-accent/10"></div>

        {/* Hero Content */}
        <div className="relative flex flex-col justify-between items-center md:flex-row container-layout py-6 md:py-4 gap-8 z-20">

            <div className="relative flex flex-col md:max-w-1/2 gap-2">
                <h1 className="font-family-logo text-3xl font-bold text-primary-dark">Hi, I&apos;m <span>Suez Sohan</span></h1>

                <span className="typewriter text-xl font-semibold text-text-primary/90">Full Stack Developer</span>

                <p className="text-lg text-text-primary/80">I create stunning web experiences with modern technologies and innovative design.</p>

                <div className="mt-4 flex flex-row space-x-4 items-center">
                    <a href="#projects" className="bg-primary text-surface py-3 px-4 font-semibold text-md rounded-lg transition duration-300 hover:bg-primary-dark">View Work</a>

                    <a href="#contact" className="bg-transparent border-2  border-accent text-text-primary/80 py-[10.5px] px-4 font-semibold text-md rounded-lg transition duration-300 hover:bg-accent/30">Contact Me</a>
                </div>
            </div>

            <div className="relative md:max-w-1/2">

                <motion.img
                animate = {{y:[0, -10, 0]}}
                transition = {{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
                className="w-[400px] h-auto" src="./hero.png" alt="Hero Image" />

            </div>
      </div>
    </section>
  );
}

export default Hero;
