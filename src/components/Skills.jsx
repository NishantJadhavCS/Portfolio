import Reveal from './Reveal'
import TiltedCard from './TiltedCard'

const skills = [
  ['React', 'react.png'],
  ['JavaScript', 'javascript.png'],
  ['Django', 'django-1.png'],
  ['Python', 'python.png'],
  ['Shopify', 'shopify.png'],
  ['Docker', 'docker.png'],
  ['AWS', 'aws.png'],
  ['Git', 'git.png'],
  ['Node.js', 'node.png'],
  ['PHP', 'php.png'],
  ['C++', 'c++.png'],
  ['MongoDB', 'mongodb.png'],
  ['MySQL', 'mysql.png'],
  ['HTML5', 'html.png'],
  ['CSS3', 'css.png'],
  ['Linux', 'linux.png'],
  ['Google Analytics', 'analytics.png'],
  ['Microsoft Clarity', 'clarity.png'],
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
