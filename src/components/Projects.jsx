import { useState, useEffect } from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import SectionHeader from './SectionHeader'
import './Projects.css'

const projects = [
  {
    title: 'Guyal - E-commerce Jewelry Store',
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
    tags: ['#shopify', '#liquid', '#javascript', '#responsive-design', '#analytics'],
    color: 'rgba(95, 95, 255, 0.1)'
  },
  {
    title: 'Juler - Shopify Dropshipping App',
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
    tags: ['#react', '#django', '#shopify-api', '#liquid', '#docker', '#aws', '#github-actions'],
    color: 'rgba(0, 255, 231, 0.1)'
  },
  {
    title: 'DumplingKhang - Restaurant Landing Page',
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
    tags: ['#html', '#css', '#javascript', '#responsive-design'],
    color: 'rgba(91, 227, 214, 0.1)'
  },
  {
    title: 'RPious Couture - Clothing E-com Website',
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
    tags: ['#shopify', '#liquid', '#javascript', '#responsive-design', '#analytics'],
    color: 'rgba(91, 227, 214, 0.1)'
  },
]

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
      <div className="bg-text-container">
        <span className="bg-text left">Latest</span>
        <span className="bg-text right">Works</span>
      </div>

      <SectionHeader
        eyebrow="Selected Work"
        title="Featured"
        highlight="Projects"
        description="A showcase of selected projects highlighting my skills in web development and design."
      />

      <div className="projects-stack-wrapper">
        <ScrollStack
          itemDistance={isMobile ? 150 : 250}
          itemScale={0.04}
          baseScale={0.92}
          itemStackDistance={isMobile ? 8 : 20}
          /* Calculated to center an 82vh card perfectly on screen */
          stackPosition={isMobile ? "10%" : "9%"}
        >
          {projects.map((project, idx) => (
            <ScrollStackItem key={idx}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-stack-link-wrapper"
              >
                <div className="project-stack-card-inner">
                  <div className="project-card-visual">
                    <img
                      src={isMobile && project.mobileImage ? project.mobileImage : project.image}
                      alt={project.alt}
                      width={isMobile && project.mobileWidth ? project.mobileWidth : project.width}
                      height={isMobile && project.mobileHeight ? project.mobileHeight : project.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="project-card-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
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
