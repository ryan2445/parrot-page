import { useCallback } from 'react'
import './App.css'
import layer1 from './layers/layer1.png'
import layer2 from './layers/layer2.png'
import layer3 from './layers/layer3.png'
import layer4 from './layers/layer4.png'
import layer5 from './layers/layer5.png'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

// website mock simple plants jungle colorful parrot --no computer --no person

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="page">
      <div className="container">
        <div className="about-me">
          <div>Ryan Hoffman</div>
          <div>Software Engineer</div>
          <div>Copia</div>
        </div>
        <div className="image top plant-container">
          <img src={layer1} className="plant" />
        </div>
        <div className="image top plant-container">
          <img src={layer2} className="plant" />
        </div>
        <div className="image bottom">
          <img src={layer3} />
        </div>
        <div className="image bottom">
          <img src={layer4} />
        </div>
        <div className="image bottom plant-container">
          <img src={layer5} className="plant" />
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            particles: {
              color: {
                value: '#FCAE1E'
              },
              move: {
                direction: 'none',
                enable: true,
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 1000
                },
                value: 40
              },
              opacity: {
                value: 0.25
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 3 }
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
