import Reveal from './Reveal'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import './Projects.css'

const projects = [
  {
    title: 'DumplingKhang - Restaurant Landing Page',
    image: '/images/dumplingkhang.png',
    alt: 'DumplingKhang landing page',
    href: 'https://www.dumplingkhang.com',
    description:
      'A fully responsive static website built for a restaurant. Features include smooth scroll navigation, menu highlights, and WhatsApp ordering integration.',
    tags: ['#html', '#css', '#javascript', '#responsive-design'],
    color: 'rgba(91, 227, 214, 0.1)'
  },
  {
    title: 'Guyal - E-commerce Jewelry Store',
    image: '/images/guyal-website.png',
    alt: 'Guyal e-commerce website',
    href: 'https://www.guyal.com/',
    description:
      'Developed and maintained a feature-rich jewelry store using Shopify. Built custom sections, automated workflows, and integrated analytics tools.',
    tags: ['#shopify', '#liquid', '#javascript', '#responsive-design', '#analytics'],
    color: 'rgba(95, 95, 255, 0.1)'
  },
  {
    title: 'News Summarizer',
    image: '/images/new-summarizer.png',
    alt: 'News summarizer app',
    href: 'https://github.com/NishantJadhavCS/RapidReads',
    description:
      'Developed a web application that fetches news articles using APIs, parses content, and generates concise summaries with Python.',
    tags: ['#python', '#django', '#bootstrap', '#api-integration'],
    color: 'rgba(0, 255, 231, 0.1)'
  },
  {
    title: 'RPious Couture - Clothing E-com Website',
    image: '/images/rpious-website.png',
    alt: 'RPious Couture website',
    href: 'https://rpiouscouture.com/',
    description:
      "Building a custom Shopify storefront for a women's ethnic fashion brand. Personalized theme development, user experience focus, plus analytics.",
    tags: ['#shopify', '#liquid', '#javascript', '#responsive-design', '#analytics'],
    color: 'rgba(91, 227, 214, 0.1)'
  },
]

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-header">
        <Reveal>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A showcase of selected projects highlighting my skills in web development, design, and problem-solving. Each
            includes a short description and links to live demos or source code.
          </p>
        </Reveal>
      </div>

      <div className="projects-stack-wrapper">
        <ScrollStack 
          itemDistance={50} 
          itemScale={0.05} 
          baseScale={0.9} 
          useWindowScroll={true}
          rotationAmount={0}
        >
          {projects.map((project, idx) => (
            <ScrollStackItem key={idx}>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="project-stack-link-wrapper">
                  <div className="project-stack-card-inner" style={{ backgroundColor: project.color }}>
                    <div className="project-card-text">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-card-visual">
                      <img src={project.image} alt={project.alt} />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="project-stack-card-inner" style={{ backgroundColor: project.color }}>
                  <div className="project-card-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-card-visual">
                    <img src={project.image} alt={project.alt} />
                  </div>
                </div>
              )}
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}

export default Projects
