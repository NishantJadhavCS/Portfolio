import Reveal from './Reveal'
import TiltedCard from './TiltedCard'

const skills = [
  ['JavaScript', 'javascript.png'],
  ['Python', 'python.png'],
  ['C++', 'c++.png'],
  ['PHP', 'php.png'],
  ['Django', 'django-1.png'],
  ['Shopify', 'shopify.png'],
  ['NodeJS', 'node.png'],
  ['React', 'react.png'],
  ['Docker', 'docker.png'],
  ['MySQL', 'mysql.png'],
  ['MongoDB', 'mongodb.png'],
  ['Git', 'git.png'],
  ['AWS', 'aws.png'],
  ['HTML', 'html.png'],
  ['CSS', 'css.png'],
  ['Linux', 'linux.png'],
  ['Google Analytics', 'analytics.png'],
  ['MS Clarity', 'clarity.png'],
]

function Skills() {
  return (
    <section className="circle-icons" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="icon-grid">
        {skills.map(([name, image]) => (
          <Reveal className="icon-wrapper" key={name}>
            <TiltedCard
              imageSrc={`/images/${image}`}
              altText={name}
              captionText={name}
              containerHeight="100px"
              containerWidth="100px"
              imageHeight="100px"
              imageWidth="100px"
              rotateAmplitude={15}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              borderRadius="50%"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
