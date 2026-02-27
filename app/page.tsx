"use client"

import HeroSection from "../hero-section"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import "./globals.css"

import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Chatbot from "../components/chatbot"

export default function Page() {
  const missionStatement =
    "En Star Healthy, creemos que el movimiento no es una opcion; es un estilo de vida. Nacidos con la vibrante energia de Mexico, unimos a personas de todo el pais que comparten nuestra pasion por desafiar sus propios limites. Ya sea que estes buscando transformar tu cuerpo, liberar el estres del dia o conquistar nuevas metas de bienestar, estamos aqui para impulsar tu camino."

  const timelineEntries = [
    {
      id: 1,
      image: "https://scontent.fmex39-1.fna.fbcdn.net/v/t51.75761-15/496465829_17907117819148396_7682664115236764499_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=NgrWrFEVVPQQ7kNvwFFxFtl&_nc_oc=Adnsw9jjREXXFvAnUGSnJJJ31KsFAObH_0zPG6uv8Ae-t57brumnKKTBnvQ9E87gXKOXpg_heCjejsWbTlQFuULh&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=O9S2q4z8u63KbY9y_qvsNA&oh=00_AfvNkmfE9Pkg1TRxucUHx80M-JsgiUDRMq2NEhCRKwUxsQ&oe=69A701B2",
      alt: "Mujer ejercitandoce",
      title: "Cada movimiento cuenta",
      description:
        "Desde tu primer paso de baile en el salón hasta tu clase número cien de Zumba, cada persona tiene una historia que contar. En Star Healthy, celebramos con orgullo a los principiantes que se atreven a pisar la pista por primera vez. No importa si sientes que tienes dos pies izquierdos o si ya eres un experto en el ritmo, aquí lo que cuenta es tu energía",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://scontent.fmex39-1.fna.fbcdn.net/v/t39.30808-6/468737135_17888599665148396_8918557614377370657_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=6uH_iXrzGbsQ7kNvwGnbbIq&_nc_oc=AdlAw_H54kVjrnZz5sw0YeU6lM8cTQ6QT9OIGdmyLdxXCyU2qRUc7LuaIttuZyu40wkUMl-YGNVqHL9VayjEPAZI&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=ARcYqHsSNAIAWc472m99Jw&oh=00_Afvk41m83q31ZhqV3fR-uuaDoOzoUPb1P0cJB4bqBANvng&oe=69A6DF63",
      alt: "Grupo bailando",
      title: "Encuentra tu propio ritmo",
      description:
        " En Star Healthy hay un lugar especial para ti, sin importar lo que busques: desde quienes vibran alto y lo dan todo en cada paso de zumba, hasta quienes encuentran en el baile el refugio perfecto para relajarse y liberar el estrés del día. Nuestra comunidad se mueve al son de todos los estilos, recibiendo con los brazos abiertos tanto a los espíritus libres que aman cambiar de ritmo y probar una clase nueva cada semana, como a los apasionados que asisten con disciplina de su sesión favorita.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://scontent.fmex39-1.fna.fbcdn.net/v/t39.30808-6/468887579_17888597502148396_7998244954625936836_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=InPKJQ06S-0Q7kNvwGebWuo&_nc_oc=AdmoEBhCVq6M35Rb3Y-DBZsY4UTvScZIqCSNRikglBLPnvsnV1NwTXYf9c2h6FHwcfIbebCY0QSQQsfNxRZdAuju&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=7RoPYvsOSJBZwfZ-30JZ2g&oh=00_Afsm6Dm23S1HtStXKBZnZQbJ7zM2GFt1Y6u3TzyAmWUSZg&oe=69A713F9",
      alt: "Comienza hoy",
      title: "Únete al movimiento",
      description:
        "En Star Healthy Studio Fit, el ejercicio no se trata solo de marcar pasos, sino de crear momentos. Se trata de las risas antes de que empiece la música, de los desafíos compartidos en cada nueva coreografía y de la energía de una victoria colectiva al terminar la clase. Al entrar a nuestro salón, no solo te unes a un grupo, te unes a una familia que vibra en tu misma sintonía. Ponte tus tenis favoritos, entra a la pista y descubre todo lo que tu cuerpo es capaz de lograr.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">{"¿Quiénes somos?"}</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">{"DESAFIA TUS LIMITES"}</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                {"El poder esta en tu movimiento, la salud es tu eleccion"}
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://scontent.fmex39-1.fna.fbcdn.net/v/t39.30808-6/469014662_17888597736148396_4161522201474510505_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=iSTsVGiBWbcQ7kNvwFxKIgw&_nc_oc=AdmA4fBBX1Z-tUIHCwLg9YByZzL8RotJvjTEGU771arHXlQI9N2QcyEjCExEqL1bYg3k7T9_wVbV2CTvkaLAbvow&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=rhWGqKDHbSeMUJn8wPo0Jw&oh=00_AfsIbYi3eVEEXOplFEeh4ekhDzgPnT8pE9zWB1xTTCl-pQ&oe=69A71B5E"
          mobileImage="https://scontent.fmex39-1.fna.fbcdn.net/v/t39.30808-6/469014662_17888597736148396_4161522201474510505_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=iSTsVGiBWbcQ7kNvwFxKIgw&_nc_oc=AdmA4fBBX1Z-tUIHCwLg9YByZzL8RotJvjTEGU771arHXlQI9N2QcyEjCExEqL1bYg3k7T9_wVbV2CTvkaLAbvow&_nc_zt=23&_nc_ht=scontent.fmex39-1.fna&_nc_gid=rhWGqKDHbSeMUJn8wPo0Jw&oh=00_AfsIbYi3eVEEXOplFEeh4ekhDzgPnT8pE9zWB1xTTCl-pQ&oe=69A71B5E"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
      <Chatbot />
    </div>
  )
}
