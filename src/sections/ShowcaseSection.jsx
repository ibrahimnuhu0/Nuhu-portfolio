import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '../constants'

gsap.registerPlugin(ScrollTrigger)

function ProjectLinks({ project }) {
  return (
    <div className="flex items-center gap-3 mt-5 flex-wrap">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-300"
        >
          Live Demo
          <img src="/images/arrow-up.png" alt="arrow" className="w-3 h-3" />
        </a>
      )}

      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white-50 text-sm font-semibold hover:border-white/50 hover:text-white transition-all duration-300"
        >
          GitHub
          <img src="/images/arrow-up.png" alt="arrow" className="w-3 h-3 invert opacity-60" />
        </a>
      )}
    </div>
  )
}

function ShowcaseSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    // Section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    )

    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
        },
      }
    )
  }, [])

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      ref={sectionRef}
      id="work"
      className="w-full mt-20 px-5 md:px-20 py-10 md:py-20"
    >
      <p className="text-white-50 text-sm uppercase tracking-widest mb-4">
        Selected Work
      </p>

      {/* FEATURED PROJECT */}
      {featured && (
        <div className="flex xl:flex-row flex-col gap-8 xl:gap-16 mb-16 pb-16 border-b border-white/10">
          <div className="xl:w-[60%] w-full">
            <div className="relative w-full xl:h-[70vh] md:h-[50vh] h-72 rounded-2xl overflow-hidden bg-black-100">
              <img
                src={featured.image}
                alt={featured.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className="xl:w-[40%] w-full flex flex-col justify-center gap-5">
            {featured.tag && (
              <span className="w-fit text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/15 text-white-50">
                {featured.tag}
              </span>
            )}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {featured.title}
            </h2>

            <p className="text-white-50 text-base md:text-lg leading-relaxed">
              {featured.description}
            </p>

            <ProjectLinks project={featured} />
          </div>
        </div>
      )}

      {/* GRID SECTION */}
      {rest.length > 0 && (
        <>
          <p className="text-white-50 text-sm uppercase tracking-widest mb-8">
            Recent Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {rest.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group flex flex-col rounded-2xl border border-white/10 overflow-hidden bg-black-100
                           hover:border-white/25 hover:-translate-y-2 transition-all duration-500"
              >
                {/* IMAGE */}
                <div
                  className="relative w-full h-56 md:h-64 overflow-hidden"
                  style={project.bg ? { backgroundColor: project.bg } : {}}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h2 className="text-lg md:text-xl font-semibold leading-snug">
                    {project.title}
                  </h2>

                  {project.description && (
                    <p className="text-white-50 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default ShowcaseSection