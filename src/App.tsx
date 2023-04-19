import { useCallback, useEffect } from 'react'
import './App.css'
import layer1 from './layers/layer1.png'
import layer2 from './layers/layer2.png'
import layer3 from './layers/layer3.png'
import layer4 from './layers/layer4.png'
import layer5 from './layers/layer5.png'
import layer6 from './layers/layer6.png'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import { FaBuilding, FaGithub } from 'react-icons/fa'

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function createKeyframes() {
  const startRotation = getRandom(-1, 1)
  const midRotation = getRandom(2, 4)
  const startScale = getRandom(0.98, 1.02)
  const midScale = getRandom(1.02, 1.04)

  const keyframes = `
    @keyframes wind {
      0%, 100% {
        transform: rotate(${startRotation}deg) scale(${startScale});
      }
      50% {
        transform: rotate(${midRotation}deg) scale(${midScale});
      }
    }
  `

  return keyframes
}

function applyAnimation() {
  const plants: HTMLElement[] = Array.from(document.querySelectorAll('.plant'))

  for (const plant of plants) {
    const animationDuration = getRandom(3, 5)

    const keyframes = createKeyframes()

    const styleSheet = document.createElement('style')
    styleSheet.textContent = keyframes
    document.head.appendChild(styleSheet)

    plant.style.animation = `wind ${animationDuration}s infinite alternate ease-in-out`
  }
}

function App() {
  useEffect(() => {
    applyAnimation()
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="page">
      <div className="container">
        <div className="about-me">
          <div>
            <div className="name">Ryan Hoffman</div>
          </div>
          <div className="line">
            <FaBuilding />
            <div>Software Engineer</div>
          </div>
          <div className="line">
            <FaGithub />
            <a href="https://github.com/ryan2445" target="_blank">
              github.com/ryan2445
            </a>
          </div>
        </div>
        <div className="image top plant-container">
          <img src={layer1} className="plant" />
        </div>
        <div className="image top plant-container">
          <img src={layer2} className="plant" />
        </div>
        <div className="image bottom plant-container">
          <img src={layer3} />
        </div>
        <div className="image bottom plant-container">
          <img src={layer4} />
        </div>
        <div className="image bottom plant-container">
          <img src={layer5} className="plant" />
        </div>
        <div
          className="image bottom plant-container"
          style={{ bottom: -18, zIndex: 0, overflow: 'hidden' }}
        >
          <img src={layer6} className="plant" />
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          height={`${window.innerHeight - 10}px`}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              color: {
                value: '#BA8003'
              },
              move: {
                direction: 'none',
                enable: true,
                random: true,
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
                value: 0.5
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
