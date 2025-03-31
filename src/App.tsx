
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YogaPoseRecognizer from './components/YogaPoseRecognizer';
import Settings from './pages/settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YogaPoseRecognizer />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
