import CalculadoraJurosCompostos from './components/CalculadoraJurosCompostos'

function App() {

  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M32 2C15.45 2 2 15.45 2 32s13.45 30 30 30 30-13.45 30-30S48.55 2 32 2zm0 54C16.4 56 4 43.6 4 28S16.4 0 32 0s28 12.4 28 28-12.4 28-28 28zm-1-8h2v2h-2v-2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2zm4 12h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2zm6 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2z" fill="#4CAF50" />
      <path d="M0 0h64v64H0z" fill="none" />
    </svg>
      <CalculadoraJurosCompostos/>
    </div>
  );
}

export default App;