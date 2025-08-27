import ButtonSection from './components/ButtonSection';
import DiceSection from './components/DiceSection';
import WebcamCapture from './components/WebcamCapture';

const appStyles = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};

function App() {
  return (
    <div className="App" style={appStyles}>
      <ButtonSection />
      <DiceSection />
      <WebcamCapture />
    </div>
  );
}

export default App;
