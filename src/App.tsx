import { useState } from 'react';
import ButtonSection from './components/ButtonSection';
import DiceSection from './components/DiceSection';
import WebcamCapture from './components/WebcamCapture';
import Dot from './components/Dot';

const appStyles = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative' as const,
};

function App() {
  const [dot, setDot] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      (e.target as HTMLElement).tagName === 'INPUT' ||
      (e.target as HTMLElement).tagName === 'BUTTON'
    ) {
      return;
    }
    setDot({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="App" style={appStyles} onClick={handleClick}>
      {dot && <Dot x={dot.x} y={dot.y} />}
      <WebcamCapture />
      <DiceSection />
      <ButtonSection />
    </div>
  );
}

export default App;
