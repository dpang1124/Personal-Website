import { useEffect } from "react"
import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--parallax-offset",
        `${window.scrollY * 0.3}px`
      )
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/images/extendedresumepic.jpg')",
          transform: "translateY(var(--parallax-offset))",
        }}
      />

      {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/20" />


      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 flex justify-end">
          <div className="max-w-3xl text-right">
            <div className="animate-fade-up">
              <p className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
                Welcome to my portfolio
              </p>
            </div>

            <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              Hey, I'm{" "}
              <span className="text-gradient">David Pang</span>
            </h1>

            <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-white bold mb-8">
              A passionate fullstack developer transforming ideas into solutions
            </p>

            <div className="animate-fade-up animation-delay-300 flex gap-4 justify-end">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
              >
                Learn More
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg transition-colors hover:bg-accent/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-500">
        <a
          href="#about"
          className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default HeroSection
