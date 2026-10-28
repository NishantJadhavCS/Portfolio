import { ArrowLeft, Download, Printer, Sun, Moon, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile, experience, projects, skills, education, interests } from './resumeData';
import './Resume.css';

const PDF_PATH = '/Nishant-Jadhav-Resume.pdf';

function Section({ title, children }) {
  return (
    <section className="rs-section">
      <h2 className="rs-section-title">{title}</h2>
      {children}
    </section>
  );
}

function Toolbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="rs-toolbar">
      <a href="/" className="rs-tool-link">
        <ArrowLeft size={18} />
        <span>Portfolio</span>
      </a>

      <div className="rs-tool-actions">
        <button type="button" className="rs-tool-btn icon-only" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button type="button" className="rs-tool-btn hide-mobile" onClick={() => window.print()}>
          <Printer size={18} />
          <span>Print</span>
        </button>
        <a href={PDF_PATH} download className="rs-tool-btn primary">
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </div>
    </header>
  );
}

function Resume() {
  return (
    <div className="rs-page">
      <div className="rs-bg-glow" aria-hidden="true" />
      <Toolbar />

      <main>
        <article className="rs-sheet">
          <header className="rs-header">
            <div>
              <h1 className="rs-name">{profile.name}</h1>
              <p className="rs-title">{profile.title}</p>
            </div>
            <ul className="rs-contact">
              <li><Mail size={13} /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><Phone size={13} /><a href={profile.phoneHref}>{profile.phone}</a></li>
              <li><MapPin size={13} /><span>{profile.location}</span></li>
              <li><Globe size={13} /><a href={profile.websiteHref}>{profile.website}</a></li>
              <li><GithubIcon size={13} /><a href={profile.githubHref}>{profile.github}</a></li>
              <li><LinkedinIcon size={13} /><a href={profile.linkedinHref}>{profile.linkedin}</a></li>
            </ul>
          </header>

          <Section title="Profile">
            <p className="rs-summary">{profile.summary}</p>
          </Section>

          <Section title="Experience">
            {experience.map((job) => (
              <div className="rs-entry" key={job.company}>
                <div className="rs-entry-head">
                  <h3>{job.company}</h3>
                  <span className="rs-muted">{job.location}</span>
                </div>
                {job.roles.map((role) => (
                  <div className="rs-role" key={role.title}>
                    <span className="rs-role-title">{role.title}</span>
                    <span className="rs-muted">{role.duration}</span>
                  </div>
                ))}
                <ul className="rs-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="rs-tech">{job.tech.join(' · ')}</p>
              </div>
            ))}
          </Section>

          <Section title="Selected Projects">
            <div className="rs-projects">
              {projects.map((project) => (
                <div className="rs-project" key={project.name}>
                  <div className="rs-entry-head">
                    <h3>{project.name}</h3>
                    <a href={project.href} target="_blank" rel="noreferrer" className="rs-project-link">
                      {project.linkLabel}
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <p className="rs-tech">{project.tech}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Skills">
            <dl className="rs-skills">
              {skills.map(({ group, items }) => (
                <div className="rs-skill-row" key={group}>
                  <dt>{group}</dt>
                  <dd>{items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Education">
            {education.map((item) => (
              <div className="rs-edu" key={item.degree}>
                <div className="rs-entry-head">
                  <h3>{item.degree}</h3>
                  <span className="rs-muted">{item.duration}</span>
                </div>
                <div className="rs-role">
                  <span>{item.school}</span>
                  <span className="rs-score">{item.score}</span>
                </div>
              </div>
            ))}
          </Section>

          <Section title="Interests">
            <p className="rs-summary">{interests.join(' · ')}</p>
          </Section>
        </article>
      </main>
    </div>
  );
}

export default Resume;
