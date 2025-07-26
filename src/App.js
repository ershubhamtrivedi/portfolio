import {Routes,Route} from 'react-router-dom';

import Home from './components/Home';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/certificates" element={<Certificates />} />
      <Route exact path="/education" element={<Education />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
