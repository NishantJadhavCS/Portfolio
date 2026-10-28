import Reveal from './Reveal'
import './SectionHeader.css'

// Shared heading for every portfolio section: eyebrow label, title with a gradient highlight, optional lede.
function SectionHeader({ eyebrow, title, highlight, description, align = 'center', reveal = true, className = '' }) {
  const content = (
    <>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">
        {title}
        {highlight && <> <span className="section-heading-highlight">{highlight}</span></>}
      </h2>
      {description && <p className="section-lede">{description}</p>}
    </>
  )

  const classes = `section-header section-header--${align} ${className}`.trim()

  return reveal
    ? <Reveal className={classes}>{content}</Reveal>
    : <div className={classes}>{content}</div>
}

export default SectionHeader
