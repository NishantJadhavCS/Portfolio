import Reveal from './Reveal'

const experiences = [
  {
    date: 'Jan 2025 - Present',
    role: 'Software Engineer',
    company: 'Guyal - India',
    image: '/images/guyal.png',
    alt: 'Guyal - India',
    points: ['Built and customized Shopify websites and apps, automated workflows, and derived analytics reports for performance insights.'],
  },
  {
    date: 'Aug 2024 - Jan 2025',
    role: 'Full Stack Intern',
    company: 'Guyal - India',
    image: '/images/guyal.png',
    alt: 'Guyal - India',
    points: ['Developed custom Magento 2 modules and collaborated with the team on deployment and PHP application optimization.'],
  },
  {
    date: 'Jun 2023 - Present',
    role: 'Freelance Web Developer',
    company: 'Remote / Self-Employed',
    image: '/images/freelance.png',
    alt: 'Freelance - Nishant Jadhav',
    points: ['Delivered full-stack websites and e-commerce stores for clients using Shopify, Django, and React, with analytics integration.'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <p className="section-subtitle">WHAT I HAVE DONE SO FAR</p>
      <h2 className="section-title">Work Experience</h2>

      <div className="timeline">
        {experiences.map((item) => (
          <Reveal as="article" className="timeline-item" key={`${item.role}-${item.date}`}>
            <div className="timeline-icon">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience
