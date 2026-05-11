import { useReveal } from '../hooks/useReveal'

function Reveal({ as: Component = 'div', className = '', children }) {
  const ref = useReveal()

  return (
    <Component ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Component>
  )
}

export default Reveal
