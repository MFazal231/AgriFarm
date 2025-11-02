import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farmer from './pages/Farmer';
import FarmerRegistration from './pages/FarmerRegistration';
import Consumer from './pages/Consumer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/farmer/register" element={<FarmerRegistration />} />
        <Route path="/consumer" element={<Consumer />} />
      </Routes>
    </Router>
  );
}

export default App
