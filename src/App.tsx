import { useState, type MouseEvent } from 'react';
import ButtonSection from './components/ButtonSection';
import DiceSection from './components/DiceSection';
import WebcamCapture from './components/WebcamCapture';
import Dot, { NO_DOT_IDENTIFIER } from './components/Dot';

const appStyles = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative' as const,
};

function App() {
  const [dot, setDot] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(NO_DOT_IDENTIFIER)) {
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
