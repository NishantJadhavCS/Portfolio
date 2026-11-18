import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import SectionLabel from './SectionLabel'
import './Projects.css'

const projects = [
  {
    name: 'Guyal',
    type: 'E-commerce jewelry store',
    image: '/images/guyal-website.webp',
    mobileImage: '/images/guyal-mobile.webp',
    width: 1400,
    height: 701,
    mobileWidth: 395,
    mobileHeight: 748,
    alt: 'Guyal e-commerce website',
    href: 'https://www.guyal.com/',
    description:
      'Developed and maintained a feature-rich jewelry store using Shopify. Built custom sections, automated workflows, and integrated analytics tools.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Responsive Design', 'Analytics'],
  },
  {
    name: 'Juler',
    type: 'Shopify dropshipping app',
    image: '/images/juler-website.webp',
    mobileImage: '/images/juler-mobile.webp',
    width: 1400,
    height: 711,
    mobileWidth: 327,
    mobileHeight: 694,
    alt: 'Juler app listing on the Shopify App Store',
    href: 'https://apps.shopify.com/juler',
    description:
      'Public Shopify App Store app built at A&I Inc. that lets merchants launch a customizable jewelry brand with zero inventory. React frontend on Django APIs, with product personalization, conditional pricing, and automated drop-shipping fulfillment.',
    tech: ['React', 'Django', 'Shopify API', 'Liquid', 'Docker', 'AWS', 'GitHub Actions'],
  },
  {
    name: 'DumplingKhang',
    type: 'Restaurant landing page',
    image: '/images/dumplingkhang.webp',
    mobileImage: '/images/dumplingkhang-mobile.webp',
    width: 1400,
    height: 702,
    mobileWidth: 391,
    mobileHeight: 766,
    alt: 'DumplingKhang landing page',
    href: 'https://www.dumplingkhang.com',
    description:
      'A fully responsive static website built for a restaurant. Features include smooth scroll navigation, menu highlights, and WhatsApp ordering integration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    name: 'RPious Couture',
    type: 'Clothing e-commerce website',
    image: '/images/rpious-website.webp',
    mobileImage: '/images/rpious-mobile.webp',
    width: 1400,
    height: 664,
    mobileWidth: 392,
    mobileHeight: 580,
    alt: 'RPious Couture website',
    href: 'https://rpiouscouture.com/',
    description:
      "Building a custom Shopify storefront for a women's ethnic fashion brand. Personalized theme development, user experience focus, plus analytics.",
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Responsive Design', 'Analytics'],
  },
]

// "https://www.guyal.com/" -> "guyal.com", "https://apps.shopify.com/juler" -> "apps.shopify.com/juler"
const displayUrl = (href) => href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="Projects" className="projects-section">
      <div className="projects-heading">
        <SectionLabel label="Projects" />
      </div>

      <div className="projects-stack-wrapper">
        <ScrollStack
          itemDistance={isMobile ? 150 : 250}
          itemScale={0.04}
          baseScale={0.92}
          itemStackDistance={isMobile ? 8 : 20}
          /* Mobile: centres the 75vh card. Desktop: centres the ~75vh-tall 2:1 card */
          stackPosition={isMobile ? "10%" : "11%"}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-tile"
                aria-label={`${project.name}, ${project.type}. Visit ${displayUrl(project.href)}`}
              >
                <img
                  className="project-tile-image"
                  src={isMobile && project.mobileImage ? project.mobileImage : project.image}
                  alt={project.alt}
                  width={isMobile && project.mobileWidth ? project.mobileWidth : project.width}
                  height={isMobile && project.mobileHeight ? project.mobileHeight : project.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-tile-scrim" aria-hidden="true" />

                <div className="project-tile-content">
                  <p className="project-tile-url">{displayUrl(project.href)}</p>

                  <div className="project-tile-title-row">
                    <div>
                      <h3 className="project-tile-name">{project.name}</h3>
                      <p className="project-tile-type">{project.type}</p>
                    </div>
                    <span className="project-tile-cta">
                      Visit site <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>

                  <p className="project-tile-description">{project.description}</p>
                  <p className="project-tile-tech">{project.tech.join(' · ')}</p>
                </div>
              </a>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}

export default Projects
