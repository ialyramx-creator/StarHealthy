"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      image: "https://scontent.fmex39-1.fna.fbcdn.net/v/t39.30808-6/484541454_122219464892231109_8033102274404746231_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_ohc=hJPvKCZuNeMQ7kNvwHyhitr&_nc_oc=Adl-E9qE1cFXC1zML7WKzpvu7dFf58fibghVgxNO4YQvmACytC0864t4gvUgFyk3ELh9hJ0qBP6SYO6Km7xzc-5N&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=cWE-b4wCDLOek8YRAi4DZQ&oh=00_Afstq7OgU2WQ9nB46xVQbuctf8JmumpaGVzgiJPoQKawDg&oe=69A6F99F",
      alt: "Grupo SH",
    },
    {
      image: "https://scontent.fmex39-1.fna.fbcdn.net/v/t39.30808-6/468938867_17888599668148396_5591259188911454468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=ZnEQY7slXNwQ7kNvwEo24jL&_nc_oc=AdloX8DpX_8J88__FLR0nUVhZ7ImvN4DeMkXZe1wb6lcBaFiTORABBYEqHfhBY_CnwCRNiO00np9MiH7__EeA98D&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=YsjKREaR9KmPF54gOZlFlQ&oh=00_AftF8ET0WNnWOqN8bNqyjA_FX234xLohFTeO68s1By_I0w&oe=69A70CED",
      alt: "Grupo SH",
    },
    {
      image: "https://scontent.fmex39-1.fna.fbcdn.net/v/t51.82787-15/605440258_17933298153148396_6778944071388036437_n.jpg?stp=dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=V1vYYwdtasUQ7kNvwGaDkm2&_nc_oc=AdkhXyYWzYDqOI5Erc1HHnAsOlXmF-96eOt7L9GEN1oGn2-qFE8-N0DjyMqmAP9rmrOQ3TAZyiUgNS8Ft57OzrE1&_nc_zt=23&se=-1&_nc_ht=scontent.fmex39-1.fna&_nc_gid=ID13WSybuxgZNks8IMJV-w&oh=00_AfuLakJGIJYZ6nEWh48E4IhMB7WXfSHixEAVnd4zqIyZ9w&oe=69A6E5F5",
      alt: "Grupo SH",
    },
  ]

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#mission" },
    { name: "Comunidad", href: "#community" },
    { name: "Unirse", href: "#join" },
  ]

  // Navigation handlers
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        {/* Logo/Brand */}
        <div className="text-white font-bold text-xl tracking-wider">Star Healthy</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Abrir menu</span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none">
            Star Healthy
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Studio Fit</span>
          </h1>

          {/* CTA Button - Now using LiquidButton */}
          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#join")}
          >
            Unirse
          </LiquidButton>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Side Navigation Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-8 transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
