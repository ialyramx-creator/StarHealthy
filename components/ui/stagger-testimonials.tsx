"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Running club testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Star Healthy cambio mi vida. De no poder entrenar 5 minutos a completar mi primer maraton, esta comunidad creyo en mi cuando yo no creia en mi misma.",
    by: "Andrea Lopez, Maratonista",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AndreaLopez&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Me daba miedo unirme a un grupo de entrenamiento, pero Star Healthy me recibio con los brazos abiertos. Ahora tengo amigos de por vida y la confianza para perseguir cualquier meta.",
    by: "Carlos Ramirez, Corredor de trail",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CarlosRamirez&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "La energia en Star Healthy es contagiosa. Ya seas rapido o lento, todos te apoyan. No se trata de competencia, se trata de comunidad.",
    by: "Maria Fernanda, Entusiasta del 5K",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MariaFernanda&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Despues de anos entrenando solo, encontrar Star Healthy fue un cambio total. Los entrenamientos en grupo me llevaron a marcas personales que nunca crei posibles.",
    by: "David Rodriguez, Velocista",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DavidRodriguez&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Star Healthy me enseno que entrenar no es solo ejercicio, es terapia, amistad y aventura en uno solo. Este estudio salvo mi salud mental.",
    by: "Emma Torres, Entrenamiento consciente",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EmmaTorres&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Del sofa a 10K en 6 meses con el apoyo de Star Healthy. Te encuentran donde estas y te ayudan a descubrir hasta donde puedes llegar. Pura magia.",
    by: "Jorge Hernandez, Exito principiante",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JorgeHernandez&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Los entrenamientos al amanecer con Star Healthy son experiencias espirituales. Hay algo poderoso en moverse juntos mientras el mundo despierta a nuestro alrededor.",
    by: "Aisha Mohammed, Patrulla del amanecer",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AishaMohammed&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Me uni a Star Healthy despues de mudarme a una nueva ciudad. No solo encontre mi tribu de entrenamiento, encontre a mi familia elegida. El movimiento es un estilo de vida aqui.",
    by: "Alejandro Kim, Constructor de comunidad",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Star Healthy celebra cada victoria, sin importar lo pequena que sea. Mi primer kilometro se sintio como ganar las olimpiadas con este equipo animandome.",
    by: "Lisa Garcia, Heroina del primer km",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LisaGarcia&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Los planes de entrenamiento en Star Healthy son increibles. Pase de apenas terminar un 5K a calificar para Boston en solo dos anos.",
    by: "Miguel Chen, Clasificado a Boston",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MichaelChen&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Lo que me encanta de Star Healthy es la diversidad. Personas de todas las edades, origenes y habilidades se unen con una pasion compartida.",
    by: "Sofia Rodriguez, Campiona de diversidad",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SofiaRodriguez&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "La responsabilidad en Star Healthy no tiene comparacion. Cuando sabes que tu familia de entrenamiento te espera, te presentas sin importar que.",
    by: "Tyler Brooks, Rey de la constancia",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TylerBrooks&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "El grupo de trail de Star Healthy me presento los lugares mas hermosos que nunca supe que existian. Entrenar se convirtio en mi forma de explorar el mundo.",
    by: "Nina Patel, Exploradora de senderos",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPatel&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Las conversaciones despues del entrenamiento en Star Healthy son tan valiosas como los entrenamientos mismos. Resolvemos los problemas del mundo un kilometro a la vez.",
    by: "Roberto Kim, Corredor filosofo",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RobertKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Nunca pense que seria deportista, pero el enfoque amigable para principiantes de Star Healthy lo hizo posible. Ahora no puedo imaginar la vida sin entrenar.",
    by: "Jessica Martinez, Florecimiento tardio",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JessicaMartinez&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "El apoyo con lesiones en Star Healthy es increible. Cuando estuve fuera, me mantuvieron motivado y me ayudaron a regresar mas fuerte.",
    by: "Daniel Park, Historia de regreso",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DanielPark&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Las carreras beneficas de Star Healthy le dan significado a nuestros kilometros. No solo entrenamos para nosotros, entrenamos para hacer la diferencia.",
    by: "Raquel Verde, Campiona benefica",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RachelGreen&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Los talleres de tecnica en Star Healthy transformaron mi forma de entrenar. Soy mas rapido y libre de lesiones gracias a su guia experta.",
    by: "Kevin Wong, Perfeccionista de la forma",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KevinWong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Los entrenamientos virtuales de Star Healthy durante el confinamiento me mantuvieron bien. Aunque no podiamos entrenar juntos, nos mantuvimos conectados como comunidad.",
    by: "Amanda Foster, Guerrera virtual",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AmandaFoster&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "La mentoria en Star Healthy cambia vidas. Los entrenadores experimentados toman a los nuevos bajo su ala y comparten su sabiduria generosamente.",
    by: "Carlos Mendez, Agradecido aprendiz",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CarlosMendez&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
