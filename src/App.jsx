import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'
import Configurator from './components/Configurator';
import { CustomizationProvider } from './contexts/Customization';

function App() {

  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <ambientLight intensity={6} />
          <fog attach="fog" args={["#2a2a2a", 10, 20]} />
          <color attach="background" args={["#2a2a2a"]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App
